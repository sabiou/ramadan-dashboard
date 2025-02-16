import { useState, useEffect } from 'react';
import { DailyProgress } from '../types';

export const useStreak = (progressHistory: Record<string, DailyProgress>) => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const calculateStreak = () => {
      let currentStreak = 0;
      const sortedDates = Object.keys(progressHistory)
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

      // Start from the most recent date
      for (let i = sortedDates.length - 1; i >= 0; i--) {
        const date = sortedDates[i];
        const progress = progressHistory[date];

        if (!progress) break;

        const isComplete = progress.blocks.every(block => block.completed) &&
          progress.meditation &&
          progress.quranReading &&
          progress.tafsirSession &&
          progress.socialMediaFree &&
          progress.namesLearned;

        if (isComplete) {
          currentStreak++;
        } else {
          break;
        }
      }
      return currentStreak;
    };

    setStreak(calculateStreak());
  }, [progressHistory]);

  return streak;
};