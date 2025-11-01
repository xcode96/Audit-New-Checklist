
import type { Category, RawCategory, ChecklistItem, IconName } from './types';
import { ICON_MAP, ShieldIcon } from './components/icons';

// Takes raw, serializable category data and "hydrates" it with runtime properties like components and calculated fields.
export const processRawCategories = (rawCategories: RawCategory[]): Category[] => {
  return rawCategories.map(rawCategory => {
    const itemsWithState: ChecklistItem[] = rawCategory.items.map((item, index) => ({
      ...item,
      id: item.id || `${rawCategory.id}-${index}`, // Ensure ID exists
      // FIX: Cast item to allow accessing properties that are omitted in the type, but might exist in older, unsanitized data.
      // This provides backward compatibility while defaulting to `false` for new or sanitized items.
      completed: (item as Partial<ChecklistItem>).completed || false,
      ignored: (item as Partial<ChecklistItem>).ignored || false,
    }));

    return {
      ...rawCategory,
      icon: ICON_MAP[rawCategory.iconName as IconName] || ShieldIcon,
      items: itemsWithState,
      completed: itemsWithState.filter(item => item.completed).length,
      total: itemsWithState.length,
    };
  });
};

// Takes the full application state and "sanitizes" it by removing non-serializable properties (like React components),
// making it safe to store in JSON format (e.g., localStorage, export files, GitHub).
export const sanitizeCategoriesForStorage = (categories: Category[]): RawCategory[] => {
  return categories.map(({ icon, completed, total, ...rest }) => ({
    ...rest,
    items: rest.items.map(({ completed, ignored, ...itemRest }) => itemRest)
  }));
};
