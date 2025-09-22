import React, { useState, useEffect } from 'react';
import { Course, CourseCreateDTO, CourseUpdateDTO } from '../../types';
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';

interface CourseFormProps {
  course?: Course;
  onSubmit: (data: CourseCreateDTO | CourseUpdateDTO) => void;
  onCancel: () => void;
  loading?: boolean;
}

const CourseForm: React.FC<CourseFormProps> = ({ course, onSubmit, onCancel, loading = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    duration: '',
    type: '',
    stream: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (course) {
      setFormData({
        name: course.name,
        duration: course.duration,
        type: course.type,
        stream: course.stream,
      });
    }
  }, [course]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Course name is required';
    if (!formData.type) newErrors.type = 'Course type is required';
    if (!formData.stream) newErrors.stream = 'Stream is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const submitData = course
        ? { ...formData, id: course.id } as CourseUpdateDTO
        : formData as CourseCreateDTO;

      try {
        onSubmit(submitData);
        toast.success(`Course ${course ? 'updated' : 'created'} successfully`);
      } catch (err) {
        toast.error(`Failed to ${course ? 'update' : 'create'} course`);
      }
    } else {
      toast.error('Please fix the form errors');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCancel = () => {
    confirmAlert({
      title: 'Cancel Confirmation',
      message: 'Are you sure you want to cancel? Unsaved changes will be lost.',
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

  const typeOptions = [
    { value: '', label: 'Select type' },
    { value: 'UG', label: 'Undergraduate (UG)' },
    { value: 'PG', label: 'Postgraduate (PG)' }
  ];

  const streamOptions = [
    { value: '', label: 'Select stream' },
    { value: 'Science', label: 'Science' },
    { value: 'Arts', label: 'Arts' },
    { value: 'Commerce', label: 'Commerce' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Medical', label: 'Medical' },
    { value: 'Management', label: 'Management' },
    { value: 'Law', label: 'Law' }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Course Name *"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter course name"
        error={errors.name}
      />

      <Input
        label="Duration"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="e.g., 4 years, 2 years"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Course Type *"
          name="type"
          value={formData.type}
          onChange={handleChange}
          options={typeOptions}
          error={errors.type}
        />

        <Select
          label="Stream *"
          name="stream"
          value={formData.stream}
          onChange={handleChange}
          options={streamOptions}
          error={errors.stream}
        />
      </div>

      <div className="flex justify-end space-x-4 pt-6">
        <Button
          variant="secondary"
          onClick={handleCancel}
          disabled={loading}
          type="button"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          loading={loading}
        >
          {course ? 'Update Course' : 'Create Course'}
        </Button>
      </div>
    </form>
  );
};

export default CourseForm;
