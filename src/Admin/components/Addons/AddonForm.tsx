import React, { useState, useEffect } from 'react';
import { Addon, AddonCreateDTO, AddonUpdateDTO, Course, College } from '../../types';
import { apiService } from '../../services/api';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';

interface AddonFormProps {
  addon?: Addon;
  onSubmit: (data: AddonCreateDTO | AddonUpdateDTO) => void;
  onCancel: () => void;
  loading?: boolean;
}

const AddonForm: React.FC<AddonFormProps> = ({ addon, onSubmit, onCancel, loading = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    courseId: '',
    collegeIds: [] as number[],
  });

  const [courses, setCourses] = useState<Course[]>([]);
  const [colleges, setColleges] = useState<College[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetchCourses();
    fetchColleges();
  }, []);

  useEffect(() => {
  if (addon) {
    const matchedCourse = courses.find(c => c.name === addon.courseName);
    const matchedCollegeIds = colleges
      .filter(college => addon.collegeNames.includes(college.name))
      .map(college => college.id);

    setFormData({
      name: addon.name,
      courseId: matchedCourse ? String(matchedCourse.id) : '',
      collegeIds: matchedCollegeIds,
    });
  }
}, [addon, courses, colleges]);


   const fetchCourses = async () => {
    try {
      const data = await apiService.getCourses();
      setCourses(data.data);
    } catch (error) {
      toast.error('Failed to load courses');
      console.error('Error fetching courses:', error);
    }
  };

   const fetchColleges = async () => {
    try {
      const data = await apiService.getColleges();
      setColleges(data.data);
    } catch (error) {
      toast.error('Failed to load colleges');
      console.error('Error fetching colleges:', error);
    }
  };

 const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Addon name is required';
    if (!formData.courseId) newErrors.courseId = 'Course is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length) {
      toast.error('Please fix the form errors');
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const submitData = {
      name: formData.name,
      courseId: parseInt(formData.courseId),
      collegeIds: formData.collegeIds,
    };

    if (addon) {
      onSubmit({ ...submitData, id: addon.id } as AddonUpdateDTO);
      toast.success('Addon updated successfully');
    } else {
      onSubmit(submitData as AddonCreateDTO);
      toast.success('Addon created successfully');
    }
  };


   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleCollegeToggle = (collegeId: number) => {
    setFormData(prev => ({
      ...prev,
      collegeIds: prev.collegeIds.includes(collegeId)
        ? prev.collegeIds.filter(id => id !== collegeId)
        : [...prev.collegeIds, collegeId],
    }));
  };
    const handleCancel = () => {
    confirmAlert({
      title: 'Cancel Changes?',
      message: 'Are you sure you want to cancel? Unsaved changes will be lost.',
      buttons: [
        {
          label: 'Yes',
          onClick: onCancel,
        },
        {
          label: 'No',
        },
      ],
    });
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Addon Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter addon name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="courseId" className="block text-sm font-medium text-gray-700 mb-1">
          Course *
        </label>
        <select
          id="courseId"
          name="courseId"
          value={formData.courseId}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.courseId ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name} ({course.type})
            </option>
          ))}
        </select>
        {errors.courseId && <p className="text-red-500 text-xs mt-1">{errors.courseId}</p>}
      </div>

      {colleges.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Available Colleges
          </label>
          <div className="max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-3">
            <div className="space-y-2">
              {colleges.map((college) => (
                <label key={college.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.collegeIds.includes(college.id)}
                    onChange={() => handleCollegeToggle(college.id)}
                    className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    {college.name} - {college.location}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {formData.collegeIds.length} college(s) selected
          </p>
        </div>
      )}

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Saving...' : addon ? 'Update Addon' : 'Create Addon'}
        </button>
      </div>
    </form>
  );
};

export default AddonForm;