
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgressCard from './components/ProgressCard';
import RadarChartCard from './components/RadarChartCard';
import BarChartListCard from './components/BarChartListCard';
import CategoryGrid from './components/CategoryGrid';
import Footer from './components/Footer';
import CategoryDetail from './components/CategoryDetail';
import LoginModal from './components/LoginModal';
import AddCategoryForm from './components/AddCategoryForm';
import EditChecklistItemModal from './components/EditChecklistItemModal';
import EditCategoryModal from './components/EditCategoryModal';
import { CATEGORIES as INITIAL_CATEGORIES } from './constants';
import { ICON_MAP } from './components/icons';
import type { Category, ChecklistItem, IconName } from './types';

const App: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(() => {
    try {
      const savedState = localStorage.getItem('digitalDefenseState');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        if (Array.isArray(parsedState) && parsedState.length > 0 && parsedState[0].items) {
          return parsedState;
        }
      }
      return INITIAL_CATEGORIES;
    } catch (error) {
      console.error("Could not parse state from localStorage", error);
      return INITIAL_CATEGORIES;
    }
  });

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const [editingItem, setEditingItem] = useState<{ categoryId: string; item: ChecklistItem } | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);


  useEffect(() => {
    try {
      localStorage.setItem('digitalDefenseState', JSON.stringify(categories));
    } catch (error) {
      console.error("Could not save state to localStorage", error);
    }
  }, [categories]);

  const handleLogin = (password: string): boolean => {
    if (password === 'password') {
      setIsAdminLoggedIn(true);
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };
  
  // Checklist Item CRUD
  const handleAddNewItem = (categoryId: string, newItem: Omit<ChecklistItem, 'id' | 'completed' | 'ignored'>) => {
    setCategories(prevCategories =>
      prevCategories.map(category => {
        if (category.id === categoryId) {
          const fullNewItem: ChecklistItem = {
            ...newItem,
            id: `${categoryId}-${Date.now()}`,
            completed: false,
            ignored: false,
          };
          const updatedItems = [...category.items, fullNewItem];
          return { ...category, items: updatedItems, total: updatedItems.length };
        }
        return category;
      })
    );
  };
  
  const handleEditItem = (categoryId: string, updatedItem: ChecklistItem) => {
     setCategories(prev => prev.map(cat => {
      if (cat.id === categoryId) {
        return {
          ...cat,
          items: cat.items.map(item => item.id === updatedItem.id ? updatedItem : item)
        };
      }
      return cat;
    }));
    setEditingItem(null);
  };

  const handleDeleteItem = (categoryId: string, itemId: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
        setCategories(prev => prev.map(cat => {
            if (cat.id === categoryId) {
                const newItems = cat.items.filter(item => item.id !== itemId);
                return { ...cat, items: newItems, total: newItems.length, completed: newItems.filter(i => i.completed).length };
            }
            return cat;
        }));
    }
  };

  // Category CRUD
  const handleAddCategory = (newCategoryData: Omit<Category, 'id' | 'completed' | 'total' | 'items' | 'icon' | 'textColor'>) => {
    const newCategory: Category = {
        ...newCategoryData,
        id: newCategoryData.title.toLowerCase().replace(/\s+/g, '-'),
        completed: 0,
        total: 0,
        items: [],
        icon: ICON_MAP[newCategoryData.iconName as IconName],
        textColor: `text-[${newCategoryData.color}]` // This might need a better approach for Tailwind
    };
    setCategories(prev => [...prev, newCategory]);
  };
  
  const handleEditCategory = (updatedCategoryData: Category) => {
    setCategories(prev => prev.map(cat => cat.id === updatedCategoryData.id ? updatedCategoryData : cat));
    setEditingCategory(null);
    if(selectedCategoryId === updatedCategoryData.id) {
        setSelectedCategoryId(updatedCategoryData.id);
    }
  };
  
  const handleDeleteCategory = (categoryId: string) => {
    if (window.confirm('Are you sure you want to delete this entire category and all its items? This action cannot be undone.')) {
        setCategories(prev => prev.filter(cat => cat.id !== categoryId));
        setSelectedCategoryId(null);
    }
  };


  // Toggles and Resets
  const handleToggleComplete = (categoryId: string, itemId: string, isCompleted: boolean) => {
    setCategories(prevCategories =>
      prevCategories.map(category => {
        if (category.id === categoryId) {
          const newItems = category.items.map(item =>
            item.id === itemId ? { ...item, completed: isCompleted, ignored: isCompleted ? false : item.ignored } : item
          );
          const newCompletedCount = newItems.filter(i => i.completed).length;
          return { ...category, items: newItems, completed: newCompletedCount };
        }
        return category;
      })
    );
  };

  const handleToggleIgnore = (categoryId: string, itemId: string, isIgnored: boolean) => {
    setCategories(prevCategories =>
      prevCategories.map(category => {
        if (category.id === categoryId) {
          const newItems = category.items.map(item =>
            item.id === itemId ? { ...item, ignored: isIgnored, completed: isIgnored ? false : item.completed } : item
          );
          const newCompletedCount = newItems.filter(i => i.completed).length;
          return { ...category, items: newItems, completed: newCompletedCount };
        }
        return category;
      })
    );
  };
  
  const handleResetCategory = (categoryId: string) => {
    setCategories(prevCategories =>
      prevCategories.map(category => {
        if (category.id === categoryId) {
          const newItems = category.items.map(item => ({...item, completed: false, ignored: false }));
          return { ...category, items: newItems, completed: 0 };
        }
        return category;
      })
    );
  };

  const selectedCategory = categories.find(c => c.id === selectedCategoryId);

  const radarChartData = categories.map(category => {
      const ignoredCount = category.items.filter(i => i.ignored).length;
      const effectiveTotal = category.total - ignoredCount;
      const value = effectiveTotal > 0 ? Math.round((category.completed / effectiveTotal) * 100) : 0;
      return {
        subject: category.title,
        value: value,
      };
  });

  return (
    <div className="min-h-screen bg-[#1a1e26] text-gray-300 font-sans">
      <Header 
        isAdminLoggedIn={isAdminLoggedIn}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onLogoutClick={handleLogout}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedCategory ? (
          <CategoryDetail
            category={selectedCategory}
            onBack={() => setSelectedCategoryId(null)}
            onToggleComplete={handleToggleComplete}
            onToggleIgnore={handleToggleIgnore}
            onResetFilters={handleResetCategory}
            isAdminLoggedIn={isAdminLoggedIn}
            onAddNewItem={handleAddNewItem}
            onEditItemClick={(item) => setEditingItem({ categoryId: selectedCategory.id, item })}
            onDeleteItem={handleDeleteItem}
            onEditCategoryClick={() => setEditingCategory(selectedCategory)}
            onDeleteCategory={handleDeleteCategory}
          />
        ) : (
          <>
            <Hero />
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ProgressCard categories={categories} />
              <RadarChartCard data={radarChartData} />
              <BarChartListCard categories={categories} />
            </div>
            {isAdminLoggedIn && (
                <div className="mt-8">
                    <AddCategoryForm onAddCategory={handleAddCategory} />
                </div>
            )}
            <div className="mt-8">
              <CategoryGrid categories={categories} onCategoryClick={setSelectedCategoryId} />
            </div>
          </>
        )}
      </main>
      <Footer />
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
      {editingItem && (
        <EditChecklistItemModal
            isOpen={!!editingItem}
            onClose={() => setEditingItem(null)}
            item={editingItem.item}
            categoryId={editingItem.categoryId}
            onSave={handleEditItem}
        />
      )}
      {editingCategory && (
        <EditCategoryModal
            isOpen={!!editingCategory}
            onClose={() => setEditingCategory(null)}
            category={editingCategory}
            onSave={handleEditCategory}
        />
      )}
    </div>
  );
};

export default App;
