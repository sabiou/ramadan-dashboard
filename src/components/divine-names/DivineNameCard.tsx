import { FC } from 'react';
import { DivineName } from '../../types';

interface DivineNameCardProps {
  name: DivineName;
  isLearned: boolean;
}

export const DivineNameCard: FC<DivineNameCardProps> = ({ name, isLearned }) => {
  return (
    <div className={`p-4 rounded-lg transition-colors ${
      isLearned
        ? 'bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200/50'
        : 'bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/50'
    }`}>
      <div className="text-center mb-2">
        <p className={`text-xl font-amiri ${
          isLearned ? 'text-green-800' : 'text-amber-800'
        }`}>{name.arabic}</p>
        <h3 className={`text-lg font-playfair font-medium ${
          isLearned ? 'text-green-900' : 'text-amber-900'
        }`}>{name.french}</h3>
      </div>
      <p className={`text-sm font-lora text-center ${
        isLearned ? 'text-green-700' : 'text-amber-700'
      }`}>{name.meaning}</p>
    </div>
  );
};