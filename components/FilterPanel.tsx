
import React from 'react';
import type { ChecklistItem, Status, Result } from '../types';

type Priority = ChecklistItem['priority'];

interface FilterPanelProps {
    searchTerm: string;
    onSearchTermChange: (term: string) => void;
    statusFilters: Status[];
    onStatusFilterChange: (statuses: Status[]) => void;
    resultFilters: Result[];
    onResultFilterChange: (results: Result[]) => void;
    priorityFilters: Priority[];
    onPriorityFilterChange: (priorities: Priority[]) => void;
}

const priorities: Priority[] = ['Essential', 'Optional', 'Advanced', 'Basic'];
const statuses: Status[] = ['To do', 'In progress', 'In review', 'Done'];
const results: Result[] = ['Not assessed', 'Non compliant', 'Partially compliant', 'Compliant', 'Not applicable'];


const FilterPanel: React.FC<FilterPanelProps> = ({
    searchTerm, onSearchTermChange, 
    statusFilters, onStatusFilterChange,
    resultFilters, onResultFilterChange, 
    priorityFilters, onPriorityFilterChange
}) => {
    
    const handleMultiCheckboxChange = <T extends string>(
        currentFilters: T[], 
        setter: (newFilters: T[]) => void, 
        value: T
    ) => {
        const newFilters = currentFilters.includes(value)
            ? currentFilters.filter(f => f !== value)
            : [...currentFilters, value];
        setter(newFilters);
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg my-4 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Search */}
                <div className="md:col-span-4">
                    <label htmlFor="search-filter" className="block text-sm font-medium text-gray-400">Search</label>
                    <input 
                        type="text" 
                        id="search-filter"
                        value={searchTerm}
                        onChange={(e) => onSearchTermChange(e.target.value)}
                        className="mt-1 block w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="Search controls or details..."
                    />
                </div>

                {/* Status */}
                <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Status</h4>
                    <div className="space-y-2">
                        {statuses.map(status => (
                            <div key={status} className="flex items-center">
                                <input
                                    id={`status-${status}`}
                                    name="status"
                                    type="checkbox"
                                    checked={statusFilters.includes(status)}
                                    onChange={() => handleMultiCheckboxChange(statusFilters, onStatusFilterChange, status)}
                                    className="h-4 w-4 rounded text-purple-600 border-gray-500 bg-gray-700 focus:ring-purple-500 cursor-pointer"
                                />
                                <label htmlFor={`status-${status}`} className="ml-3 block text-sm font-medium text-gray-300 capitalize cursor-pointer">{status}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Result */}
                <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Result</h4>
                    <div className="space-y-2">
                        {results.map(result => (
                            <div key={result} className="flex items-center">
                                <input
                                    id={`result-${result}`}
                                    name="result"
                                    type="checkbox"
                                    checked={resultFilters.includes(result)}
                                    onChange={() => handleMultiCheckboxChange(resultFilters, onResultFilterChange, result)}
                                    className="h-4 w-4 rounded text-purple-600 border-gray-500 bg-gray-700 focus:ring-purple-500 cursor-pointer"
                                />
                                <label htmlFor={`result-${result}`} className="ml-3 block text-sm font-medium text-gray-300 capitalize cursor-pointer">{result}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Priority */}
                <div>
                     <h4 className="text-sm font-medium text-gray-400 mb-2">Priority</h4>
                    <div className="space-y-2">
                        {priorities.map(priority => (
                            <div key={priority} className="flex items-center">
                                <input
                                    id={`priority-${priority}`}
                                    name={`priority-${priority}`}
                                    type="checkbox"
                                    checked={priorityFilters.includes(priority)}
                                    onChange={() => handleMultiCheckboxChange(priorityFilters, onPriorityFilterChange, priority)}
                                    className="h-4 w-4 rounded text-purple-600 border-gray-500 bg-gray-700 focus:ring-purple-500 cursor-pointer"
                                />
                                <label htmlFor={`priority-${priority}`} className="ml-3 block text-sm font-medium text-gray-300 cursor-pointer">{priority}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;
