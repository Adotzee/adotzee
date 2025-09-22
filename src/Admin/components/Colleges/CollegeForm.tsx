import React, { useState, useEffect } from 'react';
import { College, CollegeCreateDTO, CollegeUpdateDTO } from '../../types';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';

interface CollegeFormProps {
  college?: College;
  onSubmit: (data: CollegeCreateDTO | CollegeUpdateDTO) => void;
  onCancel: () => void;
  loading?: boolean;
}

const CollegeForm: React.FC<CollegeFormProps> = ({ college, onSubmit, onCancel, loading = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (college) {
      setFormData({
        name: college.name,
        location: college.location,
      });
    }
  }, [college]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'College name is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error('Please fix the form errors');
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const submitData = college
        ? ({ ...formData, id: college.id } as CollegeUpdateDTO)
        : (formData as CollegeCreateDTO);

      onSubmit(submitData);
      toast.success(`College ${college ? 'updated' : 'added'} successfully`);
    }
  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

    const handleCancelClick = () => {
    confirmAlert({
      title: 'Cancel Confirmation',
      message: 'Are you sure you want to cancel?',
      buttons: [
        {
          label: 'Yes',
          onClick: onCancel,
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          College Name *
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
          placeholder="Enter college name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
          Location *
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.location ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter college location"
        />
        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={handleCancelClick}
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
          {loading ? 'Saving...' : college ? 'Update College' : 'Create College'}
        </button>
      </div>
    </form>
  );
};

export default CollegeForm;