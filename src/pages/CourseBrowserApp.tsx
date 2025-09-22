import React, { useState, useEffect } from 'react';
import { ChevronRight, BookOpen, GraduationCap, Building2, Plus } from 'lucide-react';

// Types based on your backend models
interface Course {
  id: number;
  name: string;
  type: 'UG' | 'PG';
  stream: 'Science' | 'Arts' | 'Commerce' | 'Humanities';
  duration: string;
}

interface AddonCourse {
  id: number;
  name: string;
  courseId: number;
}

interface College {
  id: number;
  name: string;
  location: string;
}

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

// Mock API functions (replace with actual API calls)
const api = {
  getCoursesByTypeAndStream: async (type: string, stream: string): Promise<Course[]> => {
    // Mock data - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
      { id: 1, name: `Bachelor of ${stream}`, type: type as 'UG' | 'PG', stream: stream as any, duration: '3 years' },
      { id: 2, name: `Advanced ${stream}`, type: type as 'UG' | 'PG', stream: stream as any, duration: '4 years' },
    ];
  },
  
  getAddonsByCourseId: async (courseId: number): Promise<AddonCourse[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
      { id: 1, name: 'Data Analytics', courseId },
      { id: 2, name: 'Machine Learning', courseId },
      { id: 3, name: 'Web Development', courseId },
    ];
  },
  
  getCollegesByAddonId: async (addonId: number): Promise<College[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
      { id: 1, name: 'Excellence University', location: 'Mumbai' },
      { id: 2, name: 'Innovation Institute', location: 'Delhi' },
      { id: 3, name: 'Tech College', location: 'Bangalore' },
    ];
  }
};

const CourseBrowserApp: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'type' | 'stream' | 'courses' | 'addons' | 'colleges'>('type');
  const [selectedType, setSelectedType] = useState<'UG' | 'PG' | null>(null);
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedAddon, setSelectedAddon] = useState<AddonCourse | null>(null);
  
  const [courses, setCourses] = useState<Course[]>([]);
  const [addons, setAddons] = useState<AddonCourse[]>([]);
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(false);

  const courseTypes = [
    { value: 'UG', label: 'Undergraduate (UG)', icon: BookOpen },
    { value: 'PG', label: 'Postgraduate (PG)', icon: GraduationCap }
  ];

  const streams = [
    { value: 'Science', label: 'Science', color: 'bg-blue-100 text-blue-800' },
    { value: 'Arts', label: 'Arts', color: 'bg-purple-100 text-purple-800' },
    { value: 'Commerce', label: 'Commerce', color: 'bg-green-100 text-green-800' },
    { value: 'Humanities', label: 'Humanities', color: 'bg-orange-100 text-orange-800' }
  ];

  const handleTypeSelection = (type: 'UG' | 'PG') => {
    setSelectedType(type);
    setCurrentStep('stream');
  };

  const handleStreamSelection = async (stream: string) => {
    setSelectedStream(stream);
    setLoading(true);
    try {
      const coursesData = await api.getCoursesByTypeAndStream(selectedType!, stream);
      setCourses(coursesData);
      setCurrentStep('courses');
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCourseSelection = async (course: Course) => {
    setSelectedCourse(course);
    setLoading(true);
    try {
      const addonsData = await api.getAddonsByCourseId(course.id);
      setAddons(addonsData);
      setCurrentStep('addons');
    } catch (error) {
      console.error('Error fetching addons:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddonSelection = async (addon: AddonCourse) => {
    setSelectedAddon(addon);
    setLoading(true);
    try {
      const collegesData = await api.getCollegesByAddonId(addon.id);
      setColleges(collegesData);
      setCurrentStep('colleges');
    } catch (error) {
      console.error('Error fetching colleges:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderBreadcrumb = () => (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <span 
        className={`${currentStep === 'type' ? 'text-blue-600 font-medium' : 'cursor-pointer hover:text-blue-600'}`}
        onClick={() => setCurrentStep('type')}
      >
        Course Type
      </span>
      {selectedType && (
        <>
          <ChevronRight className="w-4 h-4" />
          <span 
            className={`${currentStep === 'stream' ? 'text-blue-600 font-medium' : 'cursor-pointer hover:text-blue-600'}`}
            onClick={() => setCurrentStep('stream')}
          >
            Stream ({selectedType})
          </span>
        </>
      )}
      {selectedStream && (
        <>
          <ChevronRight className="w-4 h-4" />
          <span 
            className={`${currentStep === 'courses' ? 'text-blue-600 font-medium' : 'cursor-pointer hover:text-blue-600'}`}
            onClick={() => setCurrentStep('courses')}
          >
            Courses ({selectedStream})
          </span>
        </>
      )}
      {selectedCourse && (
        <>
          <ChevronRight className="w-4 h-4" />
          <span 
            className={`${currentStep === 'addons' ? 'text-blue-600 font-medium' : 'cursor-pointer hover:text-blue-600'}`}
            onClick={() => setCurrentStep('addons')}
          >
            Add-ons ({selectedCourse.name})
          </span>
        </>
      )}
      {selectedAddon && (
        <>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-600 font-medium">
            Colleges ({selectedAddon.name})
          </span>
        </>
      )}
    </nav>
  );

  const renderTypeSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Course Level</h1>
        <p className="text-gray-600">Select whether you're looking for undergraduate or postgraduate programs</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {courseTypes.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            onClick={() => handleTypeSelection(value as 'UG' | 'PG')}
            className="p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 group"
          >
            <Icon className="w-16 h-16 mx-auto mb-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{label}</h3>
            <div className="flex items-center justify-center text-blue-600 group-hover:translate-x-1 transition-transform">
              <span className="mr-2">Get Started</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStreamSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Select Your Stream</h1>
        <p className="text-gray-600">Choose the field of study for your {selectedType} program</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {streams.map(({ value, label, color }) => (
          <button
            key={value}
            onClick={() => handleStreamSelection(value)}
            className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 group"
          >
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${color}`}>
              {label}
            </div>
            <div className="flex items-center justify-center text-gray-600 group-hover:text-blue-600">
              <span className="mr-2">View Courses</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedStream} Courses</h1>
        <p className="text-gray-600">Available {selectedType} programs in {selectedStream}</p>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseSelection(course)}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg cursor-pointer transition-all duration-200 group"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
              <div className="flex items-center text-blue-600 group-hover:translate-x-1 transition-transform">
                <span className="mr-2">View Add-ons</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderAddons = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Course Add-ons</h1>
        <p className="text-gray-600">Additional specializations for {selectedCourse?.name}</p>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {addons.map((addon) => (
            <div
              key={addon.id}
              onClick={() => handleAddonSelection(addon)}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg cursor-pointer transition-all duration-200 group"
            >
              <Plus className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{addon.name}</h3>
              <div className="flex items-center text-blue-600 group-hover:translate-x-1 transition-transform">
                <span className="mr-2">View Colleges</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderColleges = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Available Colleges</h1>
        <p className="text-gray-600">Institutions offering {selectedAddon?.name} specialization</p>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200"
            >
              <Building2 className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{college.name}</h3>
              <p className="text-gray-600 flex items-center">
                📍 {college.location}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {currentStep !== 'type' && renderBreadcrumb()}
        
        {currentStep === 'type' && renderTypeSelection()}
        {currentStep === 'stream' && renderStreamSelection()}
        {currentStep === 'courses' && renderCourses()}
        {currentStep === 'addons' && renderAddons()}
        {currentStep === 'colleges' && renderColleges()}
      </div>
    </div>
  );
};

export default CourseBrowserApp;