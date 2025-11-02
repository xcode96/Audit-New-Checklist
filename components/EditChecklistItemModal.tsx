
import React, { useState, useEffect } from 'react';
import type { ChecklistItem, Status, Result } from '../types';
import Card from './Card';

interface EditChecklistItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ChecklistItem;
  categoryId: string;
  onSave: (categoryId: string, updatedItem: ChecklistItem) => void;
}

const statuses: Status[] = ['To do', 'In progress', 'In review', 'Done'];
const results: Result[] = ['Not assessed', 'Non compliant', 'Partially compliant', 'Compliant', 'Not applicable'];

const EditChecklistItemModal: React.FC<EditChecklistItemModalProps> = ({ isOpen, onClose, item, categoryId, onSave }) => {
  const [currentItem, setCurrentItem] = useState<ChecklistItem | null>(null);

  useEffect(() => {
    if (item) {
      setCurrentItem(item);
    }
  }, [item]);

  if (!isOpen || !currentItem) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(categoryId, currentItem);
  };

  const handleFieldChange = (field: keyof ChecklistItem, value: any) => {
    setCurrentItem(prev => prev ? { ...prev, [field]: value } : null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="w-full max-w-2xl" onClick={e => e.stopPropagation()}>
        <Card>
            <h3 className="text-xl font-bold text-white mb-4">Edit Checklist Item</h3>
            <form onSubmit={handleSubmit} className="space-y-4 max-h-[80vh] overflow-y-auto pr-2">
                <div>
                    <label htmlFor="edit-security" className="block text-sm font-medium text-gray-400">Advice / Control</label>
                    <input
                        type="text"
                        id="edit-security"
                        value={currentItem.security}
                        onChange={(e) => handleFieldChange('security', e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="edit-priority" className="block text-sm font-medium text-gray-400">Priority Level</label>
                    <select
                        id="edit-priority"
                        value={currentItem.priority}
                        onChange={(e) => handleFieldChange('priority', e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    >
                        <option>Essential</option>
                        <option>Optional</option>
                        <option>Advanced</option>
                        <option>Basic</option>
                    </select>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="edit-status" className="block text-sm font-medium text-gray-400">Status</label>
                        <select
                            id="edit-status"
                            value={currentItem.status}
                            onChange={(e) => handleFieldChange('status', e.target.value)}
                            className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        >
                            {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                     <div>
                        <label htmlFor="edit-result" className="block text-sm font-medium text-gray-400">Result</label>
                        <select
                            id="edit-result"
                            value={currentItem.result}
                            onChange={(e) => handleFieldChange('result', e.target.value)}
                            className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        >
                            {results.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>
                 </div>
                <div>
                    <label htmlFor="edit-details" className="block text-sm font-medium text-gray-400">Details / Description</label>
                    <textarea
                        id="edit-details"
                        rows={4}
                        value={currentItem.details}
                        onChange={(e) => handleFieldChange('details', e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                </div>
                 <div>
                    <label htmlFor="edit-observation" className="block text-sm font-medium text-gray-400">Observation & Notes</label>
                    <textarea
                        id="edit-observation"
                        rows={4}
                        value={currentItem.observation}
                        onChange={(e) => handleFieldChange('observation', e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                </div>
                 <div>
                    <label htmlFor="edit-evidence" className="block text-sm font-medium text-gray-400">Evidence</label>
                    <textarea
                        id="edit-evidence"
                        rows={4}
                        value={currentItem.evidence}
                        onChange={(e) => handleFieldChange('evidence', e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                </div>
                <div className="flex justify-end space-x-3 pt-4">
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
