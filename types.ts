
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

export interface Category {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: IconName;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  textColor: string;
  completed: number;
  total: number;
  items: ChecklistItem[];
}
