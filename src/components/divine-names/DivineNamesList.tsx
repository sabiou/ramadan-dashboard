import { FC } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { DivineNameCard } from './DivineNameCard';
import { divineNames } from '../../data/divineNames';
import { DailyProgress } from '../../types';

interface DivineNamesListProps {
  selectedDate: Date;
  progressHistory: Record<string, DailyProgress>;
  onToggleGoal: (date: Date, goal: keyof DailyProgress) => void;
}

export const DivineNamesList: FC<DivineNamesListProps> = ({
  selectedDate,
  progressHistory,
  onToggleGoal
}) => {
  const currentDate = selectedDate.toISOString().split('T')[0];
  const isLearned = progressHistory[currentDate]?.namesLearned;

  const getDayIndex = (date: Date) => {
    const startDate = new Date('2025-02-28');
    return Math.floor((date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  };

  const currentDayNames = divineNames.slice(
    getDayIndex(selectedDate) * 3,
    getDayIndex(selectedDate) * 3 + 3
  );

  return (
    <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-center space-x-2 mb-4">
        <Star className="h-5 w-5 text-amber-500" />
        <h2 className="text-lg font-playfair font-medium text-gray-900">
          Les Noms d'Allah du Jour
        </h2>
      </div>
      <div className="space-y-4">
        {currentDayNames.map((name, index) => (
          <DivineNameCard 
            key={index} 
            name={name}
            isLearned={isLearned}
          />
        ))}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => onToggleGoal(selectedDate, 'namesLearned')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
              isLearned
                ? 'bg-green-100 text-green-700 border border-green-300'
                : 'bg-amber-100 text-amber-700 border border-amber-300'
            }`}
          >
            <CheckCircle2 className="h-5 w-5" />
            <span>Marquer comme appris</span>
          </button>
        </div>
      </div>
    </section>
  );
};