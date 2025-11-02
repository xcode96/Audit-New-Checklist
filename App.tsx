
import React, { useState, useEffect, useMemo } from 'react';
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
import ImportExportControls from './components/ImportExportControls';
import GitHubSync from './components/GitHubSync';
import DomainList from './components/DomainList';
import { processRawCategories, sanitizeCategoriesForStorage } from './constants';
import { ICON_MAP } from './components/icons';
// FIX: Import 'RawDomain' type to resolve reference error.
import type { Category, ChecklistItem, IconName, RawCategory, Domain, RawDomain } from './types';


// Recursive helper to find a category or domain by its path
const findEntityByPath = (categories: Category[], path: string[]): Category | Domain | undefined => {
  if (path.length === 0) return undefined;
  const [firstId, ...restPath] = path;
  let currentEntity: Category | Domain | undefined = categories.find(c => c.id === firstId);
  for (const id of restPath) {
    if (!currentEntity || !('domains' in currentEntity)) return undefined;
    currentEntity = currentEntity.domains.find(d => d.id === id);
  }
  return currentEntity;
};


const App: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedState = localStorage.getItem('digitalDefenseState');
      if (savedState) {
        const parsedState: RawCategory[] = JSON.parse(savedState);
        setCategories(processRawCategories(parsedState));
      } else {
         fetch('/checklist.json')
          .then(res => res.json())
          .then((data: RawCategory[]) => setCategories(processRawCategories(data)));
      }
    } catch (error) {
      console.error("Could not parse state, loading default.", error);
       fetch('/checklist.json')
          .then(res => res.json())
          .then((data: RawCategory[]) => setCategories(processRawCategories(data)));
    } finally {
        setIsLoading(false);
    }
  }, []);

  const [navigationPath, setNavigationPath] = useState<string[]>([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<{ path: string[]; item: ChecklistItem } | null>(null);
  const [editingCategory, setEditingCategory] = useState<{ entity: Category | Domain; path: string[] } | null>(null);

  useEffect(() => {
    if (!isLoading) {
        try {
            const storableCategories = sanitizeCategoriesForStorage(categories);
            localStorage.setItem('digitalDefenseState', JSON.stringify(storableCategories));
        } catch (error) {
            console.error("Could not save state to localStorage", error);
        }
    }
  }, [categories, isLoading]);
  
  // --- Recursive Helper for State Updates ---
  const updateStateRecursively = (
      entities: (Category | Domain)[], 
      path: string[], 
      updateFn: (entity: Category | Domain) => Category | Domain
  ): any[] => {
      if (path.length === 0) return entities;
      const [currentId, ...restPath] = path;

      return entities.map(entity => {
          if (entity.id !== currentId) return entity;
          if (restPath.length === 0) return updateFn(entity);
          
          const updatedDomains = updateStateRecursively(entity.domains, restPath, updateFn);
          
          // Recalculate progress after a child has been updated
          const newCompleted = updatedDomains.reduce((sum, d) => sum + d.completed, 0);
          const newTotal = updatedDomains.reduce((sum, d) => sum + d.total, 0);
          return { ...entity, domains: updatedDomains, completed: newCompleted, total: newTotal };
      });
  };


  // --- CRUD Handlers (Recursive) ---

  const handleAddNewItem = (path: string[], newItem: Omit<ChecklistItem, 'id' | 'status' | 'result' | 'observation' | 'evidence'>) => {
    const updateFn = (entity: Category | Domain) => {
        const fullNewItem: ChecklistItem = {
            ...newItem,
            id: `${entity.id}-${Date.now()}`,
            status: 'To do', result: 'Not assessed', observation: '', evidence: ''
        };
        const updatedItems = [...entity.items, fullNewItem];
        return { ...entity, items: updatedItems, total: updatedItems.length, completed: updatedItems.filter(i => i.status === 'Done').length };
    };
    setCategories(prev => updateStateRecursively(prev, path, updateFn));
  };
  
  const handleUpdateItem = (path: string[], updatedItem: ChecklistItem) => {
    const updateFn = (entity: Category | Domain) => {
        const newItems = entity.items.map(item => item.id === updatedItem.id ? updatedItem : item);
        return { ...entity, items: newItems, completed: newItems.filter(i => i.status === 'Done').length };
    };
    setCategories(prev => updateStateRecursively(prev, path, updateFn));
    setEditingItem(null);
  };

  const handleDeleteItem = (path: string[], itemId: string) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    const updateFn = (entity: Category | Domain) => {
        const newItems = entity.items.filter(item => item.id !== itemId);
        return { ...entity, items: newItems, total: newItems.length, completed: newItems.filter(i => i.status === 'Done').length };
    };
    setCategories(prev => updateStateRecursively(prev, path, updateFn));
  };

  const handleAddCategory = (newCategoryData: Omit<Category, 'id' | 'completed' | 'total' | 'items' | 'icon' | 'domains'>) => {
    const rawNewCategory: RawCategory = {
        ...newCategoryData,
        id: newCategoryData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        items: [], domains: [],
    };
    const processedNewCategory = processRawCategories([rawNewCategory])[0];
    setCategories(prev => [...prev, processedNewCategory]);
  };

  const handleAddDomain = (parentPath: string[], newDomainData: Omit<Domain, 'id' | 'completed' | 'total' | 'items' | 'domains' | 'icon' | 'color'>) => {
    const updateFn = (parentEntity: Category | Domain) => {
        const newDomain: RawDomain = {
            ...newDomainData,
            id: `${parentEntity.id}-${newDomainData.title.toLowerCase().replace(/\s+/g, '-')}`,
            items: [], domains: []
        };
        const parentIcon = 'iconName' in parentEntity ? parentEntity.iconName : 'ShieldIcon'; // simplified inheritance
        const parentColor = parentEntity.color;
        const processedDomain = processRawCategories([{...parentEntity, iconName: parentIcon, domains: [newDomain]} as RawCategory])[0].domains[0];
        
        return { 
          ...parentEntity, 
          domains: [...parentEntity.domains, processedDomain],
          items: [] // A domain cannot have both items and sub-domains
        };
    };
    setCategories(prev => updateStateRecursively(prev, parentPath, updateFn));
  };
  
  const handleEditEntity = (path: string[], updatedEntityData: Category | Domain) => {
    const updateFn = (entity: Category | Domain) => {
        if ('iconName' in updatedEntityData && 'iconName' in entity) { // It's a Category
            const newIcon = ICON_MAP[updatedEntityData.iconName];
            const updatedDomains = entity.domains.map(domain => ({ ...domain, icon: newIcon, color: updatedEntityData.color }));
            return { ...entity, ...updatedEntityData, icon: newIcon, domains: updatedDomains };
        }
        return { ...entity, ...updatedEntityData }; // It's a Domain
    };
    setCategories(prev => updateStateRecursively(prev, path, updateFn));
    setEditingCategory(null);
  };
  
  const handleDeleteEntity = (path: string[]) => {
    if (!window.confirm('Are you sure you want to delete this folder and all its contents? This action is irreversible.')) return;

    if (path.length === 1) { // Deleting a top-level category
        setCategories(prev => prev.filter(cat => cat.id !== path[0]));
    } else { // Deleting a nested domain
        const parentPath = path.slice(0, -1);
        const entityIdToDelete = path[path.length - 1];
        const updateFn = (parentEntity: Category | Domain) => {
            const newDomains = parentEntity.domains.filter(d => d.id !== entityIdToDelete);
            return { ...parentEntity, domains: newDomains };
        };
        setCategories(prev => updateStateRecursively(prev, parentPath, updateFn));
    }
    setNavigationPath([]);
  };

  const handleImportData = (importedData: RawCategory[]) => {
    setCategories(processRawCategories(importedData));
    alert('Data imported successfully!');
  };

  const currentView = useMemo(() => findEntityByPath(categories, navigationPath), [categories, navigationPath]);
  const breadcrumbs = useMemo(() => {
      const crumbs: { title: string, path: string[] }[] = [];
      let currentPath: string[] = [];
      for (const id of navigationPath) {
          currentPath.push(id);
          const entity = findEntityByPath(categories, currentPath);
          if (entity) crumbs.push({ title: entity.title, path: [...currentPath] });
      }
      return crumbs;
  }, [categories, navigationPath]);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen bg-[#1a1e26] text-white">Loading...</div>;
  }
  
  const radarChartData = categories.map(category => ({
      subject: category.title,
      value: category.total > 0 ? Math.round((category.completed / category.total) * 100) : 0,
  }));
  
  const renderContent = () => {
      if (!currentView) { // Dashboard
          return (
              <>
                  <Hero />
                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <ProgressCard categories={categories} />
                      <RadarChartCard data={radarChartData} />
                      <BarChartListCard categories={categories} />
                  </div>
                  {isAdminLoggedIn && (
                      <div className="mt-8">
                          <h2 className="text-2xl font-bold text-white mb-4">Admin Tools</h2>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              <AddCategoryForm onAddCategory={handleAddCategory} />
                              <div className="space-y-8">
                                  <ImportExportControls categories={categories} onImport={handleImportData} />
                                  <GitHubSync categories={categories} onImport={handleImportData} />
                              </div>
                          </div>
                      </div>
                  )}
                  <div className="mt-8">
                      <CategoryGrid categories={categories} onCategoryClick={(id) => setNavigationPath([id])} />
                  </div>
              </>
          );
      }
      if (currentView.domains && currentView.domains.length > 0) { // Domain List
          return (
              <DomainList
                  parent={currentView}
                  path={navigationPath}
                  onDomainClick={(id) => setNavigationPath(prev => [...prev, id])}
                  onBack={() => setNavigationPath(prev => prev.slice(0, -1))}
                  isAdminLoggedIn={isAdminLoggedIn}
                  onEditDomain={(domain) => setEditingCategory({ entity: domain, path: [...navigationPath, domain.id] })}
                  onDeleteDomain={(id) => handleDeleteEntity([...navigationPath, id])}
                  onAddDomain={(data) => handleAddDomain(navigationPath, data)}
                  breadcrumbs={breadcrumbs}
              />
          );
      }
      // Checklist Detail View
      return (
           <CategoryDetail
              data={currentView}
              path={navigationPath}
              breadcrumbs={breadcrumbs}
              onBack={() => setNavigationPath(prev => prev.slice(0, -1))}
              onUpdateItem={(item) => handleUpdateItem(navigationPath, item)}
              isAdminLoggedIn={isAdminLoggedIn}
              onAddNewItem={(item) => handleAddNewItem(navigationPath, item)}
              onEditItemClick={(item) => setEditingItem({ path: navigationPath, item })}
              onDeleteItem={(id) => handleDeleteItem(navigationPath, id)}
              onEditCategoryClick={() => setEditingCategory({ entity: currentView, path: navigationPath })}
              onDeleteCategoryClick={() => handleDeleteEntity(navigationPath)}
              onAddDomain={(data) => handleAddDomain(navigationPath, data)}
          />
      );
  };

  return (
    <div className="min-h-screen bg-[#1a1e26] text-gray-300 font-sans">
      <Header isAdminLoggedIn={isAdminLoggedIn} onLoginClick={() => setIsLoginModalOpen(true)} onLogoutClick={() => { setIsAdminLoggedIn(false) }} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
      </main>
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} onLogin={(p) => { const success = p === 'password'; if(success) {setIsAdminLoggedIn(true); setIsLoginModalOpen(false);} return success; }} />
      {editingItem && <EditChecklistItemModal isOpen={!!editingItem} onClose={() => setEditingItem(null)} item={editingItem.item} path={editingItem.path} onSave={handleUpdateItem} />}
      {editingCategory && <EditCategoryModal isOpen={!!editingCategory} onClose={() => setEditingCategory(null)} category={editingCategory.entity} onSave={(entity) => handleEditEntity(editingCategory.path, entity)} />}
    </div>
  );
};

export default App;
