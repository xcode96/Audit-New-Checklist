
import React from 'react';
import type { ChecklistItem } from '../types';

interface ChecklistItemRowProps {
  item: ChecklistItem;
  onToggleComplete: (id: string, completed: boolean) => void;
  onToggleIgnore: (id: string, ignored: boolean) => void;
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

const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
);
const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
);

const ChecklistItemRow: React.FC<ChecklistItemRowProps> = ({ item, onToggleComplete, onToggleIgnore, isAdminLoggedIn, onEditClick, onDeleteClick }) => {
    const { id, security, priority, details, completed, ignored } = item;

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onToggleComplete(id, e.target.checked);
    };

    const handleIgnoreToggle = () => {
        onToggleIgnore(id, !ignored);
    };

    const formattedDetails = details.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:underline">$1</a>');

    const rowClasses = `transition-opacity ${ignored ? 'opacity-40' : 'opacity-100'}`;
    const gridTemplateClass = isAdminLoggedIn 
        ? 'sm:grid-cols-[auto_minmax(150px,25%)_minmax(100px,auto)_1fr_auto]' 
        : 'sm:grid-cols-[auto_minmax(150px,25%)_minmax(100px,auto)_1fr]';

    return (
        <div className={`grid grid-cols-[auto_1fr] ${gridTemplateClass} items-start gap-x-4 gap-y-2 py-4 border-b border-gray-700 ${rowClasses}`}>
            {/* Column 1: Controls */}
            <div className="flex flex-col items-center space-y-1 justify-center h-full pt-1">
                <input
                    type="checkbox"
                    aria-label={`Mark ${security} as done`}
                    checked={completed}
                    disabled={ignored}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 rounded bg-gray-600 border-gray-500 text-purple-500 focus:ring-purple-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button onClick={handleIgnoreToggle} aria-label={`Ignore ${security}`} className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white mt-2">
                    <div className={`w-7 h-4 rounded-full p-0.5 transition-colors ${ignored ? 'bg-purple-600' : 'bg-gray-600'}`}>
                        <div className={`w-3 h-3 bg-white rounded-full transform transition-transform ${ignored ? 'translate-x-3' : ''}`} />
                    </div>
                </button>
                 <span className="text-xs text-gray-500">Ignore</span>
            </div>
            
            {/* Column 2: Advice & Level (Mobile) */}
            <div className="flex flex-col">
                <p className="font-semibold text-white">{security}</p>
                 <div className="sm:hidden mt-2">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getPriorityChipClasses(priority)}`}>
                        {priority}
                    </span>
                </div>
            </div>

            {/* Column 3: Level (Desktop) */}
            <div className="hidden sm:flex justify-start items-center h-full">
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getPriorityChipClasses(priority)}`}>
                    {priority}
                </span>
            </div>

            {/* Column 4: Details */}
            <div className="text-gray-400 col-span-2 sm:col-span-1" dangerouslySetInnerHTML={{ __html: formattedDetails }}></div>

            {/* Column 5: Actions */}
            {isAdminLoggedIn && (
                <div className="flex items-center justify-center h-full space-x-2 col-span-2 sm:col-span-1">
                    <button onClick={() => onEditClick(item)} className="p-2 text-gray-400 hover:text-purple-400 transition-colors" aria-label="Edit item">
                        <EditIcon className="w-4 h-4" />
                    </button>
                    <button onClick={() => onDeleteClick(id)} className="p-2 text-gray-400 hover:text-rose-500 transition-colors" aria-label="Delete item">
                        <TrashIcon className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChecklistItemRow;
