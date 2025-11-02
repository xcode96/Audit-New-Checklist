
import type { Category, RawCategory, ChecklistItem, IconName, Status, Result, RawDomain, Domain } from './types';
import { ICON_MAP, ShieldIcon } from './components/icons';


const processChecklistItems = (rawItems: RawDomain['items'] | undefined, parentId: string): ChecklistItem[] => {
    if (!rawItems) return [];
    return rawItems.map((rawItem, index) => {
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
        id: item.id || `${parentId}-${index}`, // Ensure ID exists
        status: status,
        result: result,
        observation: item.observation || '',
        evidence: item.evidence || '',
      };
    });
};

const processRawDomains = (rawDomains: RawDomain[] | undefined, parentIcon: IconName, parentColor: string): Domain[] => {
    if (!rawDomains) return [];
    
    return rawDomains.map(rawDomain => {
        let completed = 0;
        let total = 0;
        let items: ChecklistItem[] = [];
        let subDomains: Domain[] = [];

        if (rawDomain.domains && rawDomain.domains.length > 0) {
            subDomains = processRawDomains(rawDomain.domains, parentIcon, parentColor);
            completed = subDomains.reduce((sum, d) => sum + d.completed, 0);
            total = subDomains.reduce((sum, d) => sum + d.total, 0);
        } else {
            items = processChecklistItems(rawDomain.items, rawDomain.id);
            completed = items.filter(item => item.status === 'Done').length;
            total = items.length;
        }

        return {
            ...rawDomain,
            items,
            domains: subDomains,
            completed,
            total,
            icon: ICON_MAP[parentIcon as IconName] || ShieldIcon,
            color: parentColor,
        };
    });
};


// Takes raw, serializable category data and "hydrates" it with runtime properties like components and calculated fields.
export const processRawCategories = (rawCategories: RawCategory[]): Category[] => {
  return rawCategories.map(rawCategory => {
    let completed = 0;
    let total = 0;
    let items: ChecklistItem[] = [];
    let domains: Domain[] = [];

    if (rawCategory.domains && rawCategory.domains.length > 0) {
        domains = processRawDomains(rawCategory.domains, rawCategory.iconName, rawCategory.color);
        completed = domains.reduce((sum, d) => sum + d.completed, 0);
        total = domains.reduce((sum, d) => sum + d.total, 0);
    } else {
        items = processChecklistItems(rawCategory.items, rawCategory.id);
        completed = items.filter(item => item.status === 'Done').length;
        total = items.length;
    }

    return {
      id: rawCategory.id,
      title: rawCategory.title,
      description: rawCategory.description,
      longDescription: rawCategory.longDescription,
      iconName: rawCategory.iconName,
      color: rawCategory.color,
      icon: ICON_MAP[rawCategory.iconName as IconName] || ShieldIcon,
      items,
      domains,
      completed,
      total,
    };
  });
};


// Takes the full application state and "sanitizes" it by removing non-serializable properties (like React components),
// making it safe to store in JSON format (e.g., localStorage, export files, GitHub).
const sanitizeDomainsForStorage = (domains: Domain[]): RawDomain[] => {
    return domains.map(domain => {
        const { completed, total, icon, color, ...restDomain } = domain;
        const rawDomain: RawDomain = {
            ...restDomain,
        };
        if (restDomain.domains && restDomain.domains.length > 0) {
            rawDomain.domains = sanitizeDomainsForStorage(restDomain.domains);
        } else {
            rawDomain.items = (restDomain.items || []).map(({ id, security, priority, details, status, result, observation, evidence }) => ({
                id, security, priority, details, status, result, observation, evidence
            })) as any;
        }
        return rawDomain;
    });
};


export const sanitizeCategoriesForStorage = (categories: Category[]): RawCategory[] => {
  return categories.map(({ icon, completed, total, ...rest }) => {
    const rawCategory: RawCategory = {
      ...rest,
    };

    if (rest.domains && rest.domains.length > 0) {
      rawCategory.domains = sanitizeDomainsForStorage(rest.domains);
      // For container categories, the top-level items array should be empty or omitted.
      delete rawCategory.items;
    } else {
      rawCategory.items = (rest.items || []).map(({ id, security, priority, details, status, result, observation, evidence }) => ({
          id, security, priority, details, status, result, observation, evidence
      })) as any;
    }

    return rawCategory;
  });
};
