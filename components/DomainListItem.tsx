
import React from 'react';
import type { Domain } from '../types';

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
);
const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
);
const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
);
const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
);


interface DomainListItemProps {
    domain: Domain;
    onClick: (id: string) => void;
    isAdminLoggedIn: boolean;
    onEditClick: () => void;
    onDeleteClick: () => void;
}

const DomainListItem: React.FC<DomainListItemProps> = ({ domain, onClick, isAdminLoggedIn, onEditClick, onDeleteClick }) => {
    const { id, title, description, total, completed } = domain;
    
    const allItems = domain.domains.length > 0 ? domain.domains.flatMap(d => d.items) : domain.items;
    const effectiveTotal = domain.total;
    const progress = effectiveTotal > 0 ? Math.round((completed / effectiveTotal) * 100) : 0;
    
    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        onEditClick();
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDeleteClick();
    };
    
    return (
        <div
            onClick={() => onClick(id)}
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-800/50 transition-colors"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(id)}
        >
            <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-400 mt-1">{description}</p>
            </div>
            <div className="flex items-center space-x-4 flex-shrink-0 ml-4">
                {isAdminLoggedIn && (
                    <div className="flex items-center border-r border-gray-700 pr-4 space-x-1">
                         <button onClick={handleEdit} className="p-2 text-gray-400 hover:text-purple-400 transition-colors" aria-label="Edit domain">
                            <EditIcon className="w-4 h-4" />
                        </button>
                        <button onClick={handleDelete} className="p-2 text-gray-400 hover:text-rose-500 transition-colors" aria-label="Delete domain">
                            <TrashIcon className="w-4 h-4" />
                        </button>
                    </div>
                )}
                {progress === 100 ? (
                    <div className="flex items-center space-x-2 text-emerald-400">
                       <CheckCircleIcon className="w-5 h-5" />
                       <span className="text-sm font-semibold">Completed</span>
                    </div>
                ) : (
                    <span className="text-sm font-semibold text-gray-300">{progress}%</span>
                )}
                <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </div>
        </div>
    );
};

export default DomainListItem;
