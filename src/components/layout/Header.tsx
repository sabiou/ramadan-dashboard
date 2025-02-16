import { FC } from 'react';
import { Moon, Flame } from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';
import { getHijriDate } from '../../utils/dates';

interface HeaderProps {
  selectedDate: Date; 
}

export const Header: FC<HeaderProps> = ({ selectedDate }) => {
  const { streak } = useProgress(new Date('2025-02-28'));

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <Moon className="h-6 w-6 text-indigo-600" />
            </div>
            <h1 className="text-2xl font-playfair font-semibold text-gray-900">
              Tableau de bord Ramadan
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full">
              <Flame className="h-5 w-5 text-orange-500" />
              <span className="font-playfair font-semibold text-orange-600">
                {streak}
              </span>
            </div>

            <div className="flex items-center space-x-2 px-3 py-1.5 bg-indigo-50 rounded-full">
              <Moon className="h-4 w-4 text-indigo-500" />
              <span className="font-amiri text-sm text-indigo-600">
                {getHijriDate(selectedDate)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};