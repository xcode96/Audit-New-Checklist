
import React from 'react';
import type { Category, Domain, RawCategory } from '../types';
import Card from './Card';
import DomainListItem from './DomainListItem';
import AddDomainForm from './AddDomainForm';
import ImportExportControls from './ImportExportControls';

interface DomainListProps {
  parent: Category | Domain;
  path: string[];
  breadcrumbs: { title: string, path: string[] }[];
  onDomainClick: (domainId: string) => void;
  onBack: () => void;
  isAdminLoggedIn: boolean;
  onEditDomain: (domain: Domain) => void;
  onDeleteDomain: (domainId: string) => void;
  onAddDomain: (newDomainData: Omit<Domain, 'id' | 'completed' | 'total' | 'items' | 'domains' | 'icon' | 'color'>) => void;
  categories: Category[];
  onImport: (data: RawCategory[]) => void;
}

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);

const DomainList: React.FC<DomainListProps> = ({ parent, path, breadcrumbs, onDomainClick, onBack, isAdminLoggedIn, onEditDomain, onDeleteDomain, onAddDomain, categories, onImport }) => {
  const { title, longDescription, icon: Icon, color, domains } = parent;

  return (
    <div>
      <button onClick={onBack} className="flex items-center space-x-2 text-gray-400 hover:text-white mb-6 font-semibold">
        <ArrowLeftIcon className="w-5 h-5" />
        <span>{path.length > 1 ? `Back to ${breadcrumbs[breadcrumbs.length - 2].title}` : 'Back to Dashboard'}</span>
      </button>

      <div className="mb-8 p-6 bg-[#2d3748] rounded-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4">
              <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${color}20`}}>
                  <Icon className="w-10 h-10" style={{color: color}} />
              </div>
              <div className="mt-4 sm:mt-0">
                  <h1 className="text-3xl font-bold text-white">
                      {breadcrumbs.map(b => b.title).join(' / ')}
                  </h1>
                  <p className="text-gray-400 mt-1">{longDescription}</p>
              </div>
          </div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-4">Sub-Folders</h2>
      <Card className="p-0">
        <div className="divide-y divide-gray-700">
          {domains.map(domain => (
            <DomainListItem 
                key={domain.id} 
                domain={domain} 
                onClick={onDomainClick}
                isAdminLoggedIn={isAdminLoggedIn}
                onEditClick={() => onEditDomain(domain)}
                onDeleteClick={() => onDeleteDomain(domain.id)}
            />
          ))}
          {domains.length === 0 && (
             <p className="text-center text-gray-500 p-8">This folder is empty.</p>
          )}
        </div>
      </Card>

      {isAdminLoggedIn && (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Admin Tools</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <AddDomainForm onAddDomain={onAddDomain} />
                <ImportExportControls categories={categories} onImport={onImport} />
            </div>
        </div>
      )}
    </div>
  );
};

export default DomainList;
