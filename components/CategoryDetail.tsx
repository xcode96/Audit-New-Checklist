
import React from 'react';
import type { Category, ChecklistItem } from '../types';
import Card from './Card';
import ChecklistItemRow from './ChecklistItemRow';
import AddChecklistItemForm from './AddChecklistItemForm';

interface CategoryDetailProps {
  category: Category;
  onBack: () => void;
  onToggleComplete: (categoryId: string, itemId: string, completed: boolean) => void;
  onToggleIgnore: (categoryId: string, itemId: string, ignored: boolean) => void;
  onResetFilters: (categoryId: string) => void;
  isAdminLoggedIn: boolean;
  onAddNewItem: (categoryId: string, newItem: Omit<ChecklistItem, 'id' |'completed' | 'ignored'>) => void;
  onEditItemClick: (item: ChecklistItem) => void;
  onDeleteItem: (categoryId: string, itemId: string) => void;
  onEditCategoryClick: (category: Category) => void;
  onDeleteCategory: (categoryId: string) => void;
}

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);
const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
);
const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
);
const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
);


const CategoryDetail: React.FC<CategoryDetailProps> = ({ 
    category, onBack, onToggleComplete, onToggleIgnore, onResetFilters, 
    isAdminLoggedIn, onAddNewItem, onEditItemClick, onDeleteItem,
    onEditCategoryClick, onDeleteCategory
}) => {
    const { id, title, longDescription, items, icon: Icon, color } = category;
    
    const completedCount = items.filter(i => i.completed).length;
    const ignoredCount = items.filter(i => i.ignored).length;
    const totalCount = items.length;
    const effectiveTotal = totalCount - ignoredCount;
    const percentage = effectiveTotal > 0 ? Math.round((completedCount / effectiveTotal) * 100) : 0;

    const handleAddItem = (newItem: Omit<ChecklistItem, 'id' | 'completed' | 'ignored'>) => {
        onAddNewItem(id, newItem);
    };

    return (
        <div>
             <button onClick={onBack} className="flex items-center space-x-2 text-gray-400 hover:text-white mb-6 font-semibold">
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Back to Dashboard</span>
            </button>
            <Card>
                <div className="p-2 sm:p-6">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4">
                            <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${color}20`}}>
                                <Icon className="w-10 h-10" style={{color: color}} />
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <h1 className="text-3xl font-bold text-white">{title}</h1>
                                <p className="text-gray-400 mt-1">{longDescription}</p>
                            </div>
                        </div>
                         {isAdminLoggedIn && (
                            <div className="flex space-x-2 flex-shrink-0 ml-4">
                                <button onClick={() => onEditCategoryClick(category)} className="p-2 text-gray-400 hover:text-white transition-colors" aria-label="Edit Category">
                                    <EditIcon className="w-5 h-5"/>
                                </button>
                                <button onClick={() => onDeleteCategory(id)} className="p-2 text-gray-400 hover:text-rose-500 transition-colors" aria-label="Delete Category">
                                    <TrashIcon className="w-5 h-5"/>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="mt-6">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm text-gray-400">
                            <p>{completedCount} out of {totalCount} ({percentage}%) complete, {ignoredCount} ignored</p>
                            <div className="flex space-x-2 mt-2 sm:mt-0">
                                <button onClick={() => onResetFilters(id)} className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-xs font-semibold transition-colors">
                                    <XIcon className="w-3 h-3"/>
                                    <span>RESET</span>
                                </button>
                                <button className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-xs font-semibold transition-colors">
                                    <FilterIcon className="w-3 h-3"/>
                                    <span>FILTERS</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                            <div className="h-2 rounded-full transition-all duration-500" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <div className="hidden sm:grid grid-cols-[auto_minmax(150px,25%)_minmax(100px,auto)_1fr_auto] gap-4 px-4 py-2 border-b border-gray-700 text-xs text-gray-500 font-bold uppercase tracking-wider">
                           <div className="text-center">Done?</div>
                           <div>Advice</div>
                           <div>Level</div>
                           <div>Details</div>
                           {isAdminLoggedIn && <div>Actions</div>}
                        </div>
                        <div>
                            {items.map(item => (
                                <ChecklistItemRow 
                                    key={item.id} 
                                    item={item}
                                    onToggleComplete={(itemId, completed) => onToggleComplete(id, itemId, completed)}
                                    onToggleIgnore={(itemId, ignored) => onToggleIgnore(id, itemId, ignored)}
                                    isAdminLoggedIn={isAdminLoggedIn}
                                    onEditClick={() => onEditItemClick(item)}
                                    onDeleteClick={() => onDeleteItem(id, item.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
            {isAdminLoggedIn && (
                <div className="mt-8">
                    <AddChecklistItemForm onAddItem={handleAddItem} />
                </div>
            )}
        </div>
    );
};

export default CategoryDetail;
