
import React, { useState } from 'react';
import type { Domain } from '../types';
import Card from './Card';

interface AddDomainFormProps {
    onAddDomain: (newDomainData: Omit<Domain, 'id' | 'completed' | 'total' | 'items' | 'domains' | 'icon' | 'color'>) => void;
}

const AddDomainForm: React.FC<AddDomainFormProps> = ({ onAddDomain }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) {
            alert('Please fill out at least the title and short description.');
            return;
        }

        onAddDomain({ title, description, longDescription });
        
        // Reset form
        setTitle('');
        setDescription('');
        setLongDescription('');
    };

    return (
        <Card>
            <h3 className="text-xl font-bold text-white mb-4">Add New Sub-Folder</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="dom-title" className="block text-sm font-medium text-gray-400">Title</label>
                    <input
                        type="text"
                        id="dom-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="e.g., Policy Management"
                    />
                </div>
                <div>
                    <label htmlFor="dom-description" className="block text-sm font-medium text-gray-400">Short Description</label>
                    <input
                        type="text"
                        id="dom-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="A brief summary for the folder list"
                    />
                </div>
                <div>
                    <label htmlFor="dom-long-description" className="block text-sm font-medium text-gray-400">Long Description (Optional)</label>
                    <textarea
                        id="dom-long-description"
                        rows={3}
                        value={longDescription}
                        onChange={(e) => setLongDescription(e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="A more detailed description for the folder's detail page"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                    >
                        Add Sub-Folder
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default AddDomainForm;
