import {FC} from 'react';
import {CheckCircle2, Smartphone, Utensils} from 'lucide-react';
import {TimeBlock} from '../../types';
import {isFriday, isLastTenDays} from "../../utils/dates.ts";

interface CalendarDayProps {
  date: Date;
  index: number;
  isSelected: boolean;
  isComplete: boolean;
  blocks: TimeBlock[];
  onSelect: (date: Date) => void;
  onToggleBlock: (blockIndex: number) => void;
}

export const CalendarDay: FC<CalendarDayProps> = ({
  date,
  index,
  isSelected,
  isComplete,
  onSelect,
}) => {
  return (
    <button
      onClick={() => onSelect(date)}
      className={`h-24 p-2 rounded-lg border transition-all relative overflow-hidden hover:shadow-sm ${
        isSelected
          ? 'ring-1 ring-indigo-500 border-indigo-500 shadow-sm'
          : 'border-gray-100 hover:border-indigo-100'
      } ${
        isComplete 
          ? 'bg-green-50/50' 
          : 'bg-white'
      }`}
    >
      {/* Friday Indicator - Updated to match last 10 days style */}
      {isFriday(date) && (
        <div className="absolute top-0 right-0">
          <Utensils className="absolute top-1 right-1 h-3 w-3 text-amber-600 z-10" />
          <div className="w-0 h-0 
            border-t-[32px] border-t-amber-100
            border-l-[32px] border-l-transparent">
          </div>
        </div>
      )}
      
      {/* Last 10 Days Indicator */}
      {isLastTenDays(date) && (
        <div className="absolute bottom-0 right-0">
          <Smartphone className="absolute bottom-1 right-1 h-3 w-3 text-rose-600 z-10" />
          <div className="w-0 h-0 
            border-b-[32px] border-b-rose-100
            border-l-[32px] border-l-transparent">
          </div>
        </div>
      )}

      <div className="flex flex-col h-full">
        <span className="text-sm font-medium">
          {date.getDate()}
        </span>
        <span className="text-xs text-gray-500 mt-1">
          Jour {index + 1}
        </span>
        
        {isComplete && (
          <div className="mt-auto flex justify-center">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </div>
        )}
      </div>
    </button>
  );
};