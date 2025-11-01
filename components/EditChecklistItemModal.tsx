
import React, { useState, useEffect } from 'react';
import type { ChecklistItem } from '../types';
import Card from './Card';

interface EditChecklistItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ChecklistItem;
  categoryId: string;
  onSave: (categoryId: string, updatedItem: ChecklistItem) => void;
}

const EditChecklistItemModal: React.FC<EditChecklistItemModalProps> = ({ isOpen, onClose, item, categoryId, onSave }) => {
  const [security, setSecurity] = useState('');
  const [priority, setPriority] = useState<'Essential' | 'Optional' | 'Advanced' | 'Basic'>('Optional');
  const [details, setDetails] = useState('');

  useEffect(() => {
    if (item) {
      setSecurity(item.security);
      setPriority(item.priority);
      setDetails(item.details);
    }
  }, [item]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedItem = { ...item, security, priority, details };
    onSave(categoryId, updatedItem);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="w-full max-w-2xl" onClick={e => e.stopPropagation()}>
        <Card>
            <h3 className="text-xl font-bold text-white mb-4">Edit Checklist Item</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="edit-security" className="block text-sm font-medium text-gray-400">Advice</label>
                    <input
                        type="text"
                        id="edit-security"
                        value={security}
                        onChange={(e) => setSecurity(e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="edit-priority" className="block text-sm font-medium text-gray-400">Priority Level</label>
                    <select
                        id="edit-priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value as any)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    >
                        <option>Essential</option>
                        <option>Optional</option>
                        <option>Advanced</option>
                        <option>Basic</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="edit-details" className="block text-sm font-medium text-gray-400">Details</label>
                    <textarea
                        id="edit-details"
                        rows={6}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                </div>
                <div className="flex justify-end space-x-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </Card>
      </div>
    </div>
  );
};

export default EditChecklistItemModal;
