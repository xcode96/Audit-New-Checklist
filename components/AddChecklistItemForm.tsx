
import React, { useState } from 'react';
import type { ChecklistItem } from '../types';
import Card from './Card';

interface AddChecklistItemFormProps {
    onAddItem: (newItem: Omit<ChecklistItem, 'id' | 'status' | 'result' | 'observation' | 'evidence'>) => void;
}

const AddChecklistItemForm: React.FC<AddChecklistItemFormProps> = ({ onAddItem }) => {
    const [security, setSecurity] = useState('');
    const [priority, setPriority] = useState<'Essential' | 'Optional' | 'Advanced' | 'Basic'>('Optional');
    const [details, setDetails] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!security.trim() || !details.trim()) {
            alert('Please fill out all fields.');
            return;
        }

        onAddItem({ security, priority, details });
        
        // Reset form
        setSecurity('');
        setPriority('Optional');
        setDetails('');
    };

    return (
        <Card>
            <h3 className="text-xl font-bold text-white mb-4">Add New Checklist Item</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="security" className="block text-sm font-medium text-gray-400">Advice</label>
                    <input
                        type="text"
                        id="security"
                        value={security}
                        onChange={(e) => setSecurity(e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="e.g., Use a Hardware Token"
                    />
                </div>
                <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-400">Priority Level</label>
                    <select
                        id="priority"
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
                    <label htmlFor="details" className="block text-sm font-medium text-gray-400">Details</label>
                    <textarea
                        id="details"
                        rows={4}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="Provide a detailed explanation and any relevant links using markdown format..."
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default AddChecklistItemForm;
