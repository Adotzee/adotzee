import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Tag } from 'lucide-react';
import { Addon } from '../../types';
import { apiService } from '../../services/api';
import Modal from '../UI/Modal';
import AddonForm from './AddonForm';
import LinearLoading from '../../../components/common/LinearLoading';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';

const AddonManagement: React.FC = () => {
  const [addons, setAddons] = useState<Addon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddon, setEditingAddon] = useState<Addon | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchAddons();
  }, []);

  const fetchAddons = async () => {
    try {
      setLoading(true);
      const data = await apiService.getAddons();
      setAddons(data.data);
    } catch (error) {
      console.error('Error fetching addons:', error);
    } finally {
      setLoading(false);
    }
  };

 const handleCreateAddon = async (data: any) => {
  try {
    setSubmitting(true);
    await apiService.createAddon(data);
    await fetchAddons();
    setIsModalOpen(false);
    toast.success('Addon created successfully');
  } catch (error) {
    console.error('Error creating addon:', error);
    toast.error('Failed to create addon'); 
  } finally {
    setSubmitting(false);
  }
};

 const handleUpdateAddon = async (data: any) => {
  try {
    setSubmitting(true);
    await apiService.updateAddon(data.id, data);
    await fetchAddons();
    setIsModalOpen(false);
    setEditingAddon(null);
    toast.success('Addon updated successfully');
  } catch (error) {
    console.error('Error updating addon:', error);
    toast.error('Failed to update addon');
  } finally {
    setSubmitting(false);
  }
};
const handleDeleteAddon = (id: number) => {
  confirmAlert({
    title: 'Confirm Deletion',
    message: 'Are you sure you want to delete this addon?',
    buttons: [
      {
        label: 'Yes',
        onClick: async () => {
          const deleting = toast.loading('Deleting addon...');
          try {
            await apiService.deleteAddon(id);
            await fetchAddons();
            toast.success('Addon deleted successfully', { id: deleting });
          } catch (error) {
            console.error('Error deleting addon:', error);
            toast.error('Failed to delete addon', { id: deleting });
          }
        },
      },
      {
        label: 'No',
        onClick: () => {
          toast('Deletion cancelled');
        },
      },
    ],
  });
};

  const openCreateModal = () => {
    setEditingAddon(null);
    setIsModalOpen(true);
  };

  const openEditModal = (addon: Addon) => {
    setEditingAddon(addon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingAddon(null);
  };

  const filteredAddons = addons.filter(addon => 
    addon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    addon.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <LinearLoading/>
    );
  }

  return (
    <div className="space-y-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Addon Management</h1>
          <p className="text-gray-600 mt-1">Manage course addons and specializations</p>
        </div>
        <button
          onClick={openCreateModal}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Plus size={20} className="mr-2" />
          Add Addon
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="relative max-w-md">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search addons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Addons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAddons.map((addon) => (
          <div key={addon.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <Tag size={20} className="text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 truncate">{addon.name}</h3>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => openEditModal(addon)}
                  className="text-blue-600 hover:text-blue-900 p-1 rounded"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDeleteAddon(addon.id)}
                  className="text-red-600 hover:text-red-900 p-1 rounded"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Course:</p>
              <p className="text-sm font-medium text-gray-900">{addon.courseName}</p>
            </div>

            {addon.collegeNames && addon.collegeNames.length > 0 && (
              <div>
                <p className="text-sm text-gray-600 mb-2">Available at:</p>
                <div className="space-y-1">
                  {addon.collegeNames.slice(0, 2).map((college, index) => (
                    <p key={index} className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">
                      {college}
                    </p>
                  ))}
                  {addon.collegeNames.length > 2 && (
                    <p className="text-xs text-gray-500">
                      +{addon.collegeNames.length - 2} more colleges
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredAddons.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No addons found matching your search criteria.</p>
        </div>
      )}

      {/* Addon Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingAddon ? 'Edit Addon' : 'Add New Addon'}
        size="lg"
      >
        <AddonForm
          addon={editingAddon || undefined}
          onSubmit={editingAddon ? handleUpdateAddon : handleCreateAddon}
          onCancel={closeModal}
          loading={submitting}
        />
      </Modal>
    </div>
  );
};

export default AddonManagement;