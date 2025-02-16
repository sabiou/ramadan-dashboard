// Import required modules
import { useState, useEffect } from 'react';
import { DailyProgress } from '../types';
import { initializeDayProgress } from '../utils/calendar';
import { defaultBlocks } from '../data/defaultBlocks'; // Import defaultBlocks

// Define the useProgress hook
export const useProgress = (initialDate: Date) => {
  // Initialize state for progress history
  const [progressHistory, setProgressHistory] = useState<Record<string, DailyProgress>>(() => {
    const saved = localStorage.getItem('ramadanProgress');
    if (saved) {
      const parsedData = JSON.parse(saved);
      // Update all existing dates to use the current defaultBlocks
      Object.keys(parsedData).forEach(dateStr => {
        parsedData[dateStr].blocks = [...defaultBlocks];
      });
      return parsedData;
    }
    return {
      [initialDate.toISOString().split('T')[0]]: initializeDayProgress(initialDate.toISOString().split('T')[0])
    };
  });

  // Ensure progress exists for a given date
  const ensureProgressExists = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    if (!progressHistory[dateStr]) {
      setProgressHistory(prev => ({
        ...prev,
        [dateStr]: initializeDayProgress(dateStr)
      }));
    }
  };

  // Effect to ensure progress exists for the initial date
  useEffect(() => {
    ensureProgressExists(initialDate);
  }, [initialDate]);

  // Function to toggle a block
  const toggleBlock = (date: Date, index: number) => {
    const dateStr = date.toISOString().split('T')[0];
    setProgressHistory(prev => {
      const currentProgress = prev[dateStr] || initializeDayProgress(dateStr);
      // Ensure we're using current defaultBlocks structure
      const blocks = [...defaultBlocks].map((block, i) => ({
        ...block,
        completed: currentProgress.blocks[i]?.completed || false
      }));
      
      blocks[index] = {
        ...blocks[index],
        completed: !blocks[index].completed
      };

      return {
        ...prev,
        [dateStr]: {
          ...currentProgress,
          blocks: blocks
        }
      };
    });
  };

  // Function to toggle a daily goal
  const toggleDailyGoal = (date: Date, goal: keyof DailyProgress) => {
    const dateStr = date.toISOString().split('T')[0];
    ensureProgressExists(date);

    setProgressHistory(prev => ({
      ...prev,
      [dateStr]: {
        ...prev[dateStr],
        [goal]: !prev[dateStr][goal]
      }
    }));
  };

  // Function to check if a day is complete
  const isDayComplete = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    const progress = progressHistory[dateStr];

    if (!progress) return false;

    return progress.blocks.every(block => block.completed) &&
           progress.meditation &&
           progress.quranReading &&
           progress.tafsirSession &&
           progress.socialMediaFree &&
           progress.namesLearned;
  };

  // Calculate streak
  const calculateStreak = () => {
    const dates = Object.keys(progressHistory).sort((a, b) => 
      new Date(a).getTime() - new Date(b).getTime()
    );

    let maxStreak = 0;
    let currentStreak = 0;

    dates.forEach((dateStr) => {
      const progress = progressHistory[dateStr];
      
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
    });

    return maxStreak;
  };

  // Calculate streak
  const streak = calculateStreak();

  // Effect to save progress to local storage
  useEffect(() => {
    localStorage.setItem('ramadanProgress', JSON.stringify(progressHistory));
  }, [progressHistory]);

  // Return the useProgress hook values
  return {
    progressHistory,
    toggleBlock,
    toggleDailyGoal,
    isDayComplete,
    streak,
  };
};