
import React from 'react';
import { ICON_MAP } from './components/icons';

export type IconName = keyof typeof ICON_MAP;

export type Status = 'To do' | 'In progress' | 'In review' | 'Done';
export type Result = 'Not assessed' | 'Non compliant' | 'Partially compliant' | 'Compliant' | 'Not applicable';

export interface ChecklistItem {
  id: string;
  security: string;
  priority: 'Essential' | 'Optional' | 'Advanced' | 'Basic';
  details: string;
  status: Status;
  result: Result;
  observation: string;
  evidence: string;
}

// Represents the pure data structure for a sub-category (Domain), now recursive
export interface RawDomain {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  items?: (Omit<ChecklistItem, 'status' | 'result' | 'observation' | 'evidence' | 'id'> & { id?: string, completed?: boolean, ignored?: boolean })[];
  domains?: RawDomain[]; // A domain can contain other domains
}

// Represents the hydrated data structure for a sub-category (Domain), now recursive
export interface Domain extends Omit<RawDomain, 'items' | 'domains'> {
  completed: number;
  total: number;
  items: ChecklistItem[];
  domains: Domain[]; // A domain can contain other domains
  // Domains inherit icon and color from their parent category for UI consistency.
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

// Represents the pure data structure, safe for JSON serialization.
// A category can either contain items directly OR a list of domains.
export interface RawCategory {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: IconName;
  color: string;
  items?: (Omit<ChecklistItem, 'status' | 'result' | 'observation' | 'evidence' | 'id'> & { id?: string, completed?: boolean, ignored?: boolean })[];
  domains?: RawDomain[];
}


// Represents the hydrated data structure used in the application state
export interface Category extends Omit<RawCategory, 'items' | 'domains'> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  completed: number;
  total: number;
  items: ChecklistItem[];
  domains: Domain[];
}
