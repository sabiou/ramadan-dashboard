// StreakCounter.tsx
import { FC, useEffect, useState } from 'react';
import { Flame } from 'lucide-react';
import { DailyProgress } from '../../types';

interface StreakCounterProps {
  progressHistory: Record<string, DailyProgress>;
}

export const StreakCounter: FC<StreakCounterProps> = ({ progressHistory }) => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const calculateStreak = () => {
      // Get all dates and sort them in ascending order
      const dates = Object.keys(progressHistory).sort((a, b) => 
        new Date(a).getTime() - new Date(b).getTime()
      );

      let maxStreak = 0;
      let currentStreak = 0;

      // Iterate through dates in chronological order
      dates.forEach((dateStr) => {
        const progress = progressHistory[dateStr];
        
        // Check if day is complete
        const isComplete = progress.blocks.every(block => block.completed) &&
          progress.meditation &&
          progress.quranReading &&
          progress.tafsirSession &&
          progress.socialMediaFree &&
          progress.namesLearned;

        if (isComplete) {
          currentStreak++;
          maxStreak = Math.max(maxStreak, currentStreak);
        } else {
          currentStreak = 0;
        }

        console.log(`Date: ${dateStr}, Complete: ${isComplete}, Current Streak: ${currentStreak}`);
      });

      console.log('Final max streak:', maxStreak);
      return maxStreak;
    };

    setStreak(calculateStreak());
  }, [progressHistory]);

  return (
    <div className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full">
      <Flame className="h-5 w-5 text-orange-500" />
      <span className="font-playfair font-semibold text-orange-600">{streak}</span>
    </div>
  );
};