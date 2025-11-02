
import React from 'react';
import Card from './Card';
import CircularProgress from './CircularProgress';
import type { Category, ChecklistItem } from '../types';

interface ProgressCardProps {
  categories: Category[];
}

const ProgressCard: React.FC<ProgressCardProps> = ({ categories }) => {
  const allItems: ChecklistItem[] = categories.flatMap(c => 
    c.domains.length > 0 ? c.domains.flatMap(d => d.items) : c.items
  );

  const totalCompleted = allItems.filter(item => item.status === 'Done').length;
  const totalItems = allItems.length;
  const totalIgnored = allItems.filter(item => item.result === 'Not applicable').length;
  const effectiveTotal = totalItems - totalIgnored;
  const overallProgress = effectiveTotal > 0 ? Math.round((totalCompleted / effectiveTotal) * 100) : 0;

  const calculateProgress = (priority: string) => {
    const items = allItems.filter(i => i.priority === priority || (priority === 'Essential' && i.priority === 'Basic'));
    const completed = items.filter(i => i.status === 'Done').length;
    const ignored = items.filter(i => i.result === 'Not applicable').length;
    const effective = items.length - ignored;
    return effective > 0 ? Math.round((completed / effective) * 100) : 0;
  };

  const essentialProgress = calculateProgress('Essential');
  const optionalProgress = calculateProgress('Optional');
  const advancedProgress = calculateProgress('Advanced');

  return (
    <Card className="flex flex-col space-y-6">
      <div>
        <h2 className="text-xl font-bold text-purple-400">Your Progress</h2>
        <p className="text-gray-400 mt-1">You've completed {totalCompleted} out of {totalItems} items</p>
        <div className="w-full bg-gray-600 rounded-full h-2.5 mt-3">
          <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: `${overallProgress}%` }}></div>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <div className="text-center">
          <CircularProgress percentage={essentialProgress} color="#48BB78" />
          <p className="mt-2 text-sm font-semibold text-gray-300">Essential</p>
        </div>
        <div className="text-center">
          <CircularProgress percentage={optionalProgress} color="#ECC94B" />
          <p className="mt-2 text-sm font-semibold text-gray-300">Optional</p>
        </div>
        <div className="text-center">
          <CircularProgress percentage={advancedProgress} color="#F56565" />
          <p className="mt-2 text-sm font-semibold text-gray-300">Advanced</p>
        </div>
      </div>
      <div className="bg-[#1a1e26] rounded-lg p-4 text-gray-400">
        <p className="text-sm">Next up, consider switching to more secure and privacy-respecting apps and services.</p>
        <p className="mt-2 text-md font-semibold text-white">View our directory of recommended software, at <a href="https://awesome-privacy.xyz" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">awesome-privacy.xyz</a></p>
      </div>
    </Card>
  );
};

export default ProgressCard;
