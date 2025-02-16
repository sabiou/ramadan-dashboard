import {FC} from 'react';
import {Calendar as CalendarIcon} from 'lucide-react';
import {CalendarHeader} from './CalendarHeader';
import {CalendarDay} from './CalendarDay';
import {generateRamadanDays} from '../../utils/calendar';
import {DailyProgress} from '../../types';

interface CalendarProps {
    selectedDate: Date;
    onDateSelect: (date: Date) => void;
    progressHistory: Record<string, DailyProgress>;
    onToggleBlock: (date: Date, index: number) => void;
    isDayComplete: (date: Date) => boolean;
}

export const RamadanCalendar: FC<CalendarProps> = ({
                                                       selectedDate,
                                                       onDateSelect,
                                                       progressHistory,
                                                       onToggleBlock,
                                                       isDayComplete
                                                   }) => {
    const getDayBlocks = (date: Date) => {
        const dateStr = date.toISOString().split('T')[0];
        return progressHistory[dateStr]?.blocks || [];
    };

    return (
        <section className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2 border border-gray-100">
            <div className="flex items-center space-x-2 mb-6">
                <CalendarIcon className="h-5 w-5 text-violet-500"/>
                <h2 className="text-lg font-playfair font-medium text-gray-900">
                    Calendrier Ramadan 1446H
                </h2>
            </div>

            <div className="grid grid-cols-7 gap-2">
                <CalendarHeader/>

                {[...Array(4)].map((_, i) => (
                    <div key={`empty-${i}`} className="h-24"/>
                ))}

                {generateRamadanDays().map((date, index) => (
                    <CalendarDay
                        key={date.toISOString()}
                        date={date}
                        index={index}
                        isSelected={date.toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0]}
                        isComplete={isDayComplete(date)}
                        onSelect={onDateSelect}
                        blocks={getDayBlocks(date)}
                        onToggleBlock={(blockIndex) => onToggleBlock(date, blockIndex)}
                    />
                ))}
            </div>
        </section>
    );
};