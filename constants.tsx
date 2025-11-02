
import type { Category, RawCategory, ChecklistItem, IconName, Status, Result } from './types';
import { ICON_MAP, ShieldIcon } from './components/icons';

// Takes raw, serializable category data and "hydrates" it with runtime properties like components and calculated fields.
export const processRawCategories = (rawCategories: RawCategory[]): Category[] => {
  return rawCategories.map(rawCategory => {
    const itemsWithState: ChecklistItem[] = rawCategory.items.map((rawItem, index) => {
      const item = rawItem as any; // Allow access to legacy and new properties

      // Data Migration: Convert old `completed`/`ignored` to new `status`/`result`
      let status: Status = item.status || 'To do';
      if (item.completed === true) {
        status = 'Done';
      }

      let result: Result = item.result || 'Not assessed';
      if (item.ignored === true) {
        result = 'Not applicable';
      }

      return {
        security: item.security,
        priority: item.priority,
        details: item.details,
        id: item.id || `${rawCategory.id}-${index}`, // Ensure ID exists
        status: status,
        result: result,
        observation: item.observation || '',
        evidence: item.evidence || '',
      };
    });

    return {
      ...rawCategory,
      icon: ICON_MAP[rawCategory.iconName as IconName] || ShieldIcon,
      items: itemsWithState,
      completed: itemsWithState.filter(item => item.status === 'Done').length,
      total: itemsWithState.length,
    };
  });
};

// Takes the full application state and "sanitizes" it by removing non-serializable properties (like React components),
// making it safe to store in JSON format (e.g., localStorage, export files, GitHub).
export const sanitizeCategoriesForStorage = (categories: Category[]): RawCategory[] => {
  return categories.map(({ icon, completed, total, ...rest }) => ({
    ...rest,
    // Only store what's necessary, omitting derived fields and legacy fields
    items: rest.items.map(({ id, security, priority, details, status, result, observation, evidence }) => ({
        id, security, priority, details, status, result, observation, evidence
    })) as any,
  }));
};
