import { FC } from 'react';
import { Heart, Coins } from 'lucide-react';
import { DailyProgress } from '../types';

interface DailySadaqahProps {
    selectedDate: Date;
    progressHistory: Record<string, DailyProgress>;
    onToggleGoal: (date: Date, goal: keyof DailyProgress) => void;
}

export const DailySadaqah: FC<DailySadaqahProps> = ({
    selectedDate,
    progressHistory,
    onToggleGoal
}) => {
    const currentDate = selectedDate.toISOString().split('T')[0];
    const isFriday = selectedDate.getDay() === 5;

    return (
        <section className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-2 mb-3">
                <Heart className="h-5 w-5 text-rose-500" />
                <h2 className="text-lg font-playfair font-medium text-gray-900">
                    Sadaqah
                </h2>
            </div>

            <div className={`p-3 rounded-lg border transition-colors ${
                progressHistory[currentDate]?.sadaqah
                    ? 'bg-rose-50 border-rose-200'
                    : 'border-gray-200 hover:border-gray-300'
            }`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="p-1.5 bg-rose-100 rounded-lg">
                            <Coins className="h-4 w-4 text-rose-600" /> 
                        </div>
                        <div>
                            <h3 className="font-playfair text-sm text-gray-900"> 
                                Sadaqah du Jour
                            </h3>
                            <p className="text-xs text-gray-600 font-lora"> 
                                {isFriday ? "Vendredi: Partager un repas" : "Même un petit geste compte"}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => onToggleGoal(selectedDate, 'sadaqah')}
                        className={`p-1.5 rounded-lg transition-colors ${
                            progressHistory[currentDate]?.sadaqah
                                ? 'bg-rose-100 text-rose-600'
                                : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                        }`}
                    >
                        <Heart className={`h-4 w-4 ${
                            progressHistory[currentDate]?.sadaqah ? 'fill-rose-600' : ''
                        }`} />
                    </button>
                </div>
            </div>
        </section>
    );
};