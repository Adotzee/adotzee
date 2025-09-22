import React, { useState, useEffect } from 'react';
import { ChevronRight, BookOpen, GraduationCap, MapPin, Plus } from 'lucide-react';
import axiosInstance from '../Admin/services/axiosInstance';

const CourseSelectionUI = () => {
  const [currentStep, setCurrentStep] = useState('type');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStream, setSelectedStream] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedAddon, setSelectedAddon] = useState(null);
  
  // Mock data - replace with actual API calls
  const [courses, setCourses] = useState([]);
  const [addons, setAddons] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  const courseTypes = [
    { value: 'UG', label: 'Undergraduate (UG)', icon: '🎓' },
    { value: 'PG', label: 'Postgraduate (PG)', icon: '👨‍🎓' }
  ];

  const streams = [
    { value: 'Science', label: 'Science', icon: '🔬', color: 'bg-blue-100 text-blue-800' },
    { value: 'Humanities', label: 'Humanities', icon: '📚', color: 'bg-purple-100 text-purple-800' },
    { value: 'Commerce', label: 'Commerce', icon: '💼', color: 'bg-green-100 text-green-800' }
  ];

  // Mock API functions - replace with actual API calls
  const fetchCourses = async (type, stream) => {
  setLoading(true);
  try {
    const res = await axiosInstance(`/courses/filter?type=${type}&stream=${stream}`);
    const data = await res.data.data;
    console.log(res)
    console.log(type)
    console.log(stream)
    setCourses(data);
  } catch (err) {
    console.error("Failed to fetch courses:", err);
  } finally {
    setLoading(false);
  }
};

const fetchAddons = async (courseId) => {
  setLoading(true);
  try {
    const res = await axiosInstance(`/courses/${courseId}/addons`);
    const data = await res.data.data;
    setAddons(data);
  } catch (err) {
    console.error("Failed to fetch addons:", err);
  } finally {
    setLoading(false);
  }
};

const fetchColleges = async (addonId) => {
  setLoading(true);
  try {
    const res = await axiosInstance(`/addons/${addonId}/colleges`);
    const { success, data } = await res.data;
    console.log(res)
    if (success) setColleges(data);
    else throw new Error("Colleges not found");
  } catch (err) {
    console.error("Failed to fetch colleges:", err);
    setColleges([]);
  } finally {
    setLoading(false);
  }
};

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setCurrentStep('stream');
    resetSelections();
  };

  const handleStreamSelect = (stream) => {
    setSelectedStream(stream);
    setCurrentStep('courses');
    fetchCourses(selectedType, stream);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setCurrentStep('addons');
    fetchAddons(course.id);
  };

  const handleAddonSelect = (addon) => {
    setSelectedAddon(addon);
    setCurrentStep('colleges');
    fetchColleges(addon.id);
  };

  const resetSelections = () => {
    setSelectedStream('');
    setSelectedCourse(null);
    setSelectedAddon(null);
    setCourses([]);
    setAddons([]);
    setColleges([]);
  };

  const goBack = () => {
    switch(currentStep) {
      case 'stream':
        setCurrentStep('type');
        setSelectedType('');
        break;
      case 'courses':
        setCurrentStep('stream');
        setSelectedStream('');
        setCourses([]);
        break;
      case 'addons':
        setCurrentStep('courses');
        setSelectedCourse(null);
        setAddons([]);
        break;
      case 'colleges':
        setCurrentStep('addons');
        setSelectedAddon(null);
        setColleges([]);
        break;
    }
  };

  const Breadcrumb = () => (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <span className={currentStep === 'type' ? 'font-semibold text-blue-600' : 'cursor-pointer hover:text-blue-600'} 
            onClick={() => currentStep !== 'type' && setCurrentStep('type')}>
        Course Type
      </span>
      {selectedType && (
        <>
          <ChevronRight size={16} />
          <span className={currentStep === 'stream' ? 'font-semibold text-blue-600' : 'cursor-pointer hover:text-blue-600'}
                onClick={() => currentStep !== 'stream' && currentStep !== 'type' && setCurrentStep('stream')}>
            Stream ({selectedType})
          </span>
        </>
      )}
      {selectedStream && (
        <>
          <ChevronRight size={16} />
          <span className={currentStep === 'courses' ? 'font-semibold text-blue-600' : 'cursor-pointer hover:text-blue-600'}
                onClick={() => currentStep === 'colleges' && setCurrentStep('courses')}>
            Courses ({selectedStream})
          </span>
        </>
      )}
      {selectedCourse && (
        <>
          <ChevronRight size={16} />
          <span className={currentStep === 'addons' ? 'font-semibold text-blue-600' : 'cursor-pointer hover:text-blue-600'}
                onClick={() => currentStep === 'colleges' && setCurrentStep('addons')}>
            Addons ({selectedCourse.name})
          </span>
        </>
      )}
      {selectedAddon && (
        <>
          <ChevronRight size={16} />
          <span className="font-semibold text-blue-600">
            Colleges ({selectedAddon.name})
          </span>
        </>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Course</h1>
        <p className="text-gray-600">Navigate through course types, streams, and specializations to find the right program for you.</p>
      </div>

      <Breadcrumb />

      {currentStep !== 'type' && (
        <button 
          onClick={goBack}
          className="mb-6 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
        >
          ← Go Back
        </button>
      )}

      {/* Course Type Selection */}
      {currentStep === 'type' && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Select Course Type</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {courseTypes.map((type) => (
              <div
                key={type.value}
                onClick={() => handleTypeSelect(type.value)}
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg cursor-pointer transition-all duration-200 group"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold group-hover:text-blue-600">{type.label}</h3>
                <p className="text-gray-600 mt-2">
                  {type.value === 'UG' ? 'Bachelor\'s degree programs' : 'Master\'s and advanced degree programs'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stream Selection */}
      {currentStep === 'stream' && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Select Stream</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {streams.map((stream) => (
              <div
                key={stream.value}
                onClick={() => handleStreamSelect(stream.value)}
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg cursor-pointer transition-all duration-200 group"
              >
                <div className="text-4xl mb-4">{stream.icon}</div>
                <h3 className="text-xl font-semibold group-hover:text-blue-600">{stream.label}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${stream.color}`}>
                  {selectedType} Stream
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Courses List */}
      {currentStep === 'courses' && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Available Courses</h2>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading courses...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => handleCourseSelect(course)}
                  className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md cursor-pointer transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <BookOpen className="text-blue-600" size={24} />
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-blue-600">{course.name}</h3>
                        <p className="text-gray-600">Duration: {course.duration}</p>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-blue-600" size={20} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Addons List */}
      {currentStep === 'addons' && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Available Specializations & Addons</h2>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading addons...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {addons.map((addon) => (
                <div
                  key={addon.id}
                  onClick={() => handleAddonSelect(addon)}
                  className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md cursor-pointer transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Plus className="text-green-600" size={24} />
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-blue-600">{addon.name}</h3>
                        <p className="text-gray-600">Additional specialization for {selectedCourse?.name}</p>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-blue-600" size={20} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Colleges List */}
      {currentStep === 'colleges' && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Available Colleges</h2>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading colleges...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {colleges.map((college) => (
                <div
                  key={college.id}
                  className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="text-blue-600 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-blue-600 mb-2">{college.name}</h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin size={16} className="mr-2" />
                        <span>{college.location}</span>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p><strong>Course:</strong> {selectedCourse?.name}</p>
                        <p><strong>Specialization:</strong> {selectedAddon?.name}</p>
                        <p><strong>Type:</strong> {selectedType} • {selectedStream}</p>
                      </div>
                      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseSelectionUI;