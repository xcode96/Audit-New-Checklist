
import React, { useState, useMemo } from 'react';
import type { Category, ChecklistItem, Status, Result, Domain, RawCategory } from '../types';
import Card from './Card';
import ChecklistItemRow from './ChecklistItemRow';
import AddChecklistItemForm from './AddChecklistItemForm';
import FilterPanel from './FilterPanel';
import AddDomainForm from './AddDomainForm';
import ImportExportControls from './ImportExportControls';


interface CategoryDetailProps {
  data: Category | Domain;
  path: string[];
  breadcrumbs: { title: string, path: string[] }[];
  onBack: () => void;
  onUpdateItem: (updatedItem: ChecklistItem) => void;
  isAdminLoggedIn: boolean;
  onAddNewItem: (newItem: Omit<ChecklistItem, 'id' | 'status' | 'result' | 'observation' | 'evidence'>) => void;
  onEditItemClick: (item: ChecklistItem) => void;
  onDeleteItem: (itemId: string) => void;
  onEditCategoryClick: () => void;
  onDeleteCategoryClick: () => void;
  onAddDomain: (newDomainData: Omit<Domain, 'id' | 'completed' | 'total' | 'items' | 'domains' | 'icon' | 'color'>) => void;
  categories: Category[];
  onImport: (data: RawCategory[]) => void;
}

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);
const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
);
const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
);
const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
);


const CategoryDetail: React.FC<CategoryDetailProps> = ({ 
    data, path, breadcrumbs, onBack, onUpdateItem, 
    isAdminLoggedIn, onAddNewItem, onEditItemClick, onDeleteItem,
    onEditCategoryClick, onDeleteCategoryClick, onAddDomain,
    categories, onImport
}) => {
    const { id, title, longDescription, items, icon: Icon, color } = data;
    
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilters, setStatusFilters] = useState<Status[]>([]);
    const [resultFilters, setResultFilters] = useState<Result[]>([]);
    const [priorityFilters, setPriorityFilters] = useState<ChecklistItem['priority'][]>([]);

    const completedCount = items.filter(i => i.status === 'Done').length;
    const ignoredCount = items.filter(i => i.result === 'Not applicable').length;
    const totalCount = items.length;
    const effectiveTotal = totalCount - ignoredCount;
    const percentage = effectiveTotal > 0 ? Math.round((completedCount / effectiveTotal) * 100) : 0;

    const filteredItems = useMemo(() => {
        return items
            .filter(item => statusFilters.length === 0 || statusFilters.includes(item.status))
            .filter(item => resultFilters.length === 0 || resultFilters.includes(item.result))
            .filter(item => priorityFilters.length === 0 || priorityFilters.includes(item.priority))
            .filter(item => {
                if (!searchTerm.trim()) return true;
                const lowerSearchTerm = searchTerm.toLowerCase();
                return item.security.toLowerCase().includes(lowerSearchTerm) || item.details.toLowerCase().includes(lowerSearchTerm);
            });
    }, [items, statusFilters, resultFilters, priorityFilters, searchTerm]);
    
    const resetFilters = () => {
        setSearchTerm(''); setStatusFilters([]); setResultFilters([]); setPriorityFilters([]);
    };

    const isFolderEmpty = data.items.length === 0 && data.domains.length === 0;

    return (
        <div>
             <button onClick={onBack} className="flex items-center space-x-2 text-gray-400 hover:text-white mb-6 font-semibold">
                <ArrowLeftIcon className="w-5 h-5" />
                <span>{path.length > 1 ? `Back to ${breadcrumbs[breadcrumbs.length - 2].title}` : 'Back to Dashboard'}</span>
            </button>
            <Card>
                <div className="p-2 sm:p-6">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4">
                            <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${color}20`}}>
                                <Icon className="w-10 h-10" style={{color: color}} />
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <h1 className="text-2xl md:text-3xl font-bold text-white break-all">
                                    {breadcrumbs.map(b => b.title).join(' / ')}
                                </h1>
                                <p className="text-gray-400 mt-1">{longDescription}</p>
                            </div>
                        </div>
                         {isAdminLoggedIn && (
                            <div className="flex space-x-2 flex-shrink-0 ml-4">
                                <button onClick={onEditCategoryClick} className="p-2 text-gray-400 hover:text-white transition-colors" aria-label="Edit Category">
                                    <EditIcon className="w-5 h-5"/>
                                </button>
                                <button onClick={onDeleteCategoryClick} className="p-2 text-gray-400 hover:text-rose-500 transition-colors" aria-label="Delete Category">
                                    <TrashIcon className="w-5 h-5"/>
                                </button>
                            </div>
                        )}
                    </div>
                    
                    {!isFolderEmpty && (
                        <>
                            <div className="mt-6">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm text-gray-400">
                                    <p>{completedCount} out of {totalCount} ({percentage}%) complete. <span className="hidden sm:inline">Showing {filteredItems.length} items.</span></p>
                                    <div className="flex space-x-2 mt-2 sm:mt-0">
                                        <button onClick={resetFilters} className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-xs font-semibold transition-colors">
                                            <XIcon className="w-3 h-3"/><span>RESET</span>
                                        </button>
                                        <button onClick={() => setIsFilterVisible(!isFilterVisible)} className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-xs font-semibold transition-colors">
                                            <FilterIcon className="w-3 h-3"/><span>FILTERS</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                                    <div className="h-2 rounded-full transition-all duration-500" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
                                </div>
                            </div>
                            
                            {isFilterVisible && <FilterPanel {...{searchTerm, onSearchTermChange: setSearchTerm, statusFilters, onStatusFilterChange: setStatusFilters, resultFilters, onResultFilterChange: setResultFilters, priorityFilters, onPriorityFilterChange: setPriorityFilters}} />}

                            <div className="mt-8">
                                <div className="hidden sm:grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-2 border-b border-gray-700 text-xs text-gray-500 font-bold uppercase tracking-wider">
                                <div>Control</div><div className="text-center">Status</div><div className="text-center">Result</div>
                                </div>
                                <div>
                                    {filteredItems.length > 0 ? (
                                        filteredItems.map(item => <ChecklistItemRow key={item.id} item={item} onUpdate={onUpdateItem} isAdminLoggedIn={isAdminLoggedIn} onEditClick={() => onEditItemClick(item)} onDeleteClick={() => onDeleteItem(item.id)} />)
                                    ) : ( <p className="text-center text-gray-500 py-8">No items match your filters.</p> )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Card>
            {isAdminLoggedIn && (
                <>
                    {isFolderEmpty && (
                         <div className="mt-8 text-center text-gray-500">
                            <p className="mb-4">This folder is empty. You can add sub-folders or checklist items.</p>
                        </div>
                    )}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Admin Tools</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            {isFolderEmpty && <AddDomainForm onAddDomain={onAddDomain} />}
                            <AddChecklistItemForm onAddItem={onAddNewItem} />
                            <ImportExportControls categories={categories} onImport={onImport} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CategoryDetail;
