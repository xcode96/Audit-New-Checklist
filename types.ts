
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

// Represents the pure data structure, safe for JSON serialization.
// Items from localStorage or the initial JSON can have different shapes,
// so the processor will handle normalizing this.
export interface RawCategory {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: IconName;
  color: string;
  items: (Omit<ChecklistItem, 'status' | 'result' | 'observation' | 'evidence' | 'id'> & { id?: string, completed?: boolean, ignored?: boolean })[];
}


// Represents the hydrated data structure used in the application state
export interface Category extends Omit<RawCategory, 'items'> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  completed: number;
  total: number;
  items: ChecklistItem[];
}
