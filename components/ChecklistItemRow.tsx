
import React, { useState } from 'react';
import type { ChecklistItem, Status, Result } from '../types';

interface ChecklistItemRowProps {
  item: ChecklistItem;
  onUpdate: (updatedItem: ChecklistItem) => void;
  isAdminLoggedIn: boolean;
  onEditClick: (item: ChecklistItem) => void;
  onDeleteClick: (id: string) => void;
}

const getPriorityChipClasses = (priority: ChecklistItem['priority']) => {
    switch (priority) {
        case 'Essential':
        case 'Basic':
            return 'bg-emerald-500/20 text-emerald-300';
        case 'Optional':
            return 'bg-yellow-500/20 text-yellow-300';
        case 'Advanced':
            return 'bg-rose-500/20 text-rose-300';
        default:
            return 'bg-gray-500/20 text-gray-300';
    }
};

const getStatusChipClasses = (status: Status) => {
    switch (status) {
        case 'Done': return 'bg-green-500/20 text-green-300';
        case 'In progress': return 'bg-blue-500/20 text-blue-300';
        case 'In review': return 'bg-yellow-500/20 text-yellow-300';
        case 'To do': return 'bg-gray-500/20 text-gray-300';
        default: return 'bg-gray-500/20 text-gray-300';
    }
};


const getResultChipClasses = (result: Result) => {
    switch(result) {
        case 'Compliant': return 'bg-green-500/20 text-green-300';
        case 'Partially compliant': return 'bg-yellow-500/20 text-yellow-300';
        case 'Non compliant': return 'bg-red-500/20 text-red-300';
        case 'Not applicable': return 'bg-gray-500/20 text-gray-400 italic';
        case 'Not assessed':
        default: return 'bg-gray-700/20 text-gray-500';
    }
}


const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
);
const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
);
const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);

const statuses: Status[] = ['To do', 'In progress', 'In review', 'Done'];
const results: Result[] = ['Not assessed', 'Non compliant', 'Partially compliant', 'Compliant', 'Not applicable'];


const ChecklistItemRow: React.FC<ChecklistItemRowProps> = ({ item, onUpdate, isAdminLoggedIn, onEditClick, onDeleteClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { id, security, priority, details, status, result } = item;
    
    const formattedDetails = details.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:underline">$1</a>');

    const handleFieldChange = (field: keyof ChecklistItem, value: any) => {
        onUpdate({ ...item, [field]: value });
    };

    return (
        <div className="border-b border-gray-700">
            <div 
                className="grid grid-cols-[auto_1fr_auto_auto] sm:grid-cols-[auto_1fr_auto_auto_auto_auto] items-center gap-x-4 p-4 cursor-pointer hover:bg-gray-800/50"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <button className="text-gray-400" aria-label={isExpanded ? "Collapse row" : "Expand row"}>
                    <ChevronDownIcon className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}/>
                </button>

                <div className="flex flex-col">
                    <p className="font-semibold text-white">{security}</p>
                    <div className="sm:hidden mt-1">
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${getPriorityChipClasses(priority)}`}>
                            {priority}
                        </span>
                    </div>
                </div>

                <div className="hidden sm:flex justify-center items-center">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getPriorityChipClasses(priority)}`}>
                        {priority}
                    </span>
                </div>

                <div className="text-center">
                     <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusChipClasses(status)}`}>{status}</span>
                </div>

                <div className="text-center">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getResultChipClasses(result)}`}>{result}</span>
                </div>

                {isAdminLoggedIn && (
                    <div className="flex items-center justify-center space-x-2" onClick={e => e.stopPropagation()}>
                        <button onClick={() => onEditClick(item)} className="p-2 text-gray-400 hover:text-purple-400 transition-colors" aria-label="Edit item">
                            <EditIcon className="w-4 h-4" />
                        </button>
                        <button onClick={() => onDeleteClick(id)} className="p-2 text-gray-400 hover:text-rose-500 transition-colors" aria-label="Delete item">
                            <TrashIcon className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
            
            {isExpanded && (
                <div className="p-4 bg-gray-900/50 space-y-4">
                    <div>
                        <h4 className="text-sm font-bold text-gray-400 mb-1">Description</h4>
                        <div className="text-gray-400 prose prose-sm prose-invert" dangerouslySetInnerHTML={{ __html: formattedDetails }}></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                             <label htmlFor={`status-${id}`} className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                             <select
                                id={`status-${id}`}
                                value={status}
                                onChange={e => handleFieldChange('status', e.target.value)}
                                className="w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            >
                                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                         <div>
                             <label htmlFor={`result-${id}`} className="block text-sm font-medium text-gray-400 mb-1">Result</label>
                             <select
                                id={`result-${id}`}
                                value={result}
                                onChange={e => handleFieldChange('result', e.target.value)}
                                className="w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            >
                                {results.map(r => <option key={r} value={r}>{r}</option>)}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor={`observation-${id}`} className="block text-sm font-medium text-gray-400 mb-1">Observation & Notes</label>
                        <textarea
                            id={`observation-${id}`}
                            rows={3}
                            defaultValue={item.observation}
                            onBlur={e => handleFieldChange('observation', e.target.value)}
                            className="w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Add your notes, observations, or implementation details here..."
                        />
                    </div>
                     <div>
                        <label htmlFor={`evidence-${id}`} className="block text-sm font-medium text-gray-400 mb-1">Evidence</label>
                        <textarea
                            id={`evidence-${id}`}
                            rows={3}
                            defaultValue={item.evidence}
                            onBlur={e => handleFieldChange('evidence', e.target.value)}
                            className="w-full bg-[#1a1e26] border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Link to documents, screenshots, or other evidence..."
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChecklistItemRow;
