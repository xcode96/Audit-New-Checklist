
import React from 'react';
import Card from './Card';
import type { Category } from '../types';

interface BarChartListCardProps {
    categories: Category[];
}

const BarChartListCard: React.FC<BarChartListCardProps> = ({ categories }) => {
  return (
    <Card>
      <ul className="space-y-4">
        {categories.map(category => {
            const ignoredCount = category.items.filter(i => i.result === 'Not applicable').length;
            const effectiveTotal = category.total - ignoredCount;
            const completedCount = category.items.filter(i => i.status === 'Done').length;
            const progress = effectiveTotal > 0 ? Math.round((completedCount / effectiveTotal) * 100) : 0;

            return (
                <li key={category.id} className="flex items-center space-x-3">
                    <category.icon className="w-5 h-5 flex-shrink-0" style={{ color: category.color }} />
                    <div className="flex-1">
                        <span className="text-sm font-medium text-gray-300">{category.title}</span>
                        <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
                            <div 
                                className="h-2 rounded-full" 
                                style={{ 
                                    width: `${progress}%`,
                                    backgroundColor: category.color,
                                }}
                            ></div>
                        </div>
                    </div>
                </li>
            );
        })}
      </ul>
    </Card>
  );
};

export default BarChartListCard;
