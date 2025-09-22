import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, MapPin } from 'lucide-react';
import { College } from '../../types';
import { apiService } from '../../services/api';
import Modal from '../UI/Modal';
import CollegeForm from './CollegeForm';
import LinearLoading from '../../../components/common/LinearLoading';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';

const CollegeManagement: React.FC = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCollege, setEditingCollege] = useState<College | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchColleges();
  }, []);

   const fetchColleges = async () => {
    try {
      setLoading(true);
      const res = await apiService.getColleges();
      setColleges(res.data);
    } catch (err) {
      toast.error('Failed to fetch colleges.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCollege = async (data: any) => {
    try {
      setSubmitting(true);
      await apiService.createCollege(data);
      toast.success('College created successfully');
      await fetchColleges();
      closeModal();
    } catch (err) {
      toast.error('Error creating college.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

   const handleUpdateCollege = async (data: any) => {
    try {
      setSubmitting(true);
      await apiService.updateCollege(data);
      toast.success('College updated successfully');
      await fetchColleges();
      closeModal();
    } catch (err) {
      toast.error('Error updating college.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

 const handleDeleteCollege = (id: number) => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this college?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await apiService.deleteCollege(id);
              toast.success('College deleted successfully');
              await fetchColleges();
            } catch (err) {
              toast.error('Failed to delete college');
              console.error(err);
            }
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };


  const openCreateModal = () => {
    setEditingCollege(null);
    setIsModalOpen(true);
  };

  const openEditModal = (college: College) => {
    setEditingCollege(college);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCollege(null);
  };

  const filteredColleges = colleges.filter(college => 
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <LinearLoading/>;
  

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">College Management</h1>
          <p className="text-gray-600 mt-1">Manage educational institutions and their details</p>
        </div>
        <button
          onClick={openCreateModal}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Plus size={20} className="mr-2" />
          Add College
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="relative max-w-md">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search colleges..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Colleges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <div key={college.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900 truncate">{college.name}</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => openEditModal(college)}
                  className="text-blue-600 bg-transparent hover:text-blue-900 p-1 rounded"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDeleteCollege(college.id)}
                  className="text-red-600 bg-transparent hover:text-red-900 p-1 rounded"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin size={16} className="mr-2" />
              <span className="text-sm">{college.location}</span>
            </div>

            {college.addons && college.addons.length > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Available Addons:</p>
                <div className="flex flex-wrap gap-1">
                  {college.addons.slice(0, 3).map((addon, index) => (
                    <span
                      key={index}
                      className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                    >
                      {addon}
                    </span>
                  ))}
                  {college.addons.length > 3 && (
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                      +{college.addons.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No colleges found matching your search criteria.</p>
        </div>
      )}

      {/* College Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingCollege ? 'Edit College' : 'Add New College'}
        size="lg"
      >
        <CollegeForm
          college={editingCollege || undefined}
          onSubmit={editingCollege ? handleUpdateCollege : handleCreateCollege}
          onCancel={closeModal}
          loading={submitting}
        />
      </Modal>
    </div>
  );
};

export default CollegeManagement;