
import React from 'react';
import { ICON_MAP } from './components/icons';

export type IconName = keyof typeof ICON_MAP;

export interface ChecklistItem {
  id: string;
  security: string;
  priority: 'Essential' | 'Optional' | 'Advanced' | 'Basic';
  details: string;
  completed: boolean;
  ignored: boolean;
}

// Represents the pure data structure, safe for JSON serialization
export interface RawCategory {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: IconName;
  color: string;
  items: Omit<ChecklistItem, 'completed' | 'ignored'>[];
}


// Represents the hydrated data structure used in the application state
export interface Category extends Omit<RawCategory, 'items'> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  completed: number;
  total: number;
  items: ChecklistItem[];
}
