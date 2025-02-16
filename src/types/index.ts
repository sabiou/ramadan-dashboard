// src/types/index.ts
export type TimeBlock = {
  time: string;  // Explicitly define time as string
  worship: string[];
  completed: boolean;
};

export interface DailyProgress {
  date: string;
  blocks: TimeBlock[];
  meditation: boolean;
  quranReading: boolean;
  tafsirSession: boolean;
  socialMediaFree: boolean;
  namesLearned: boolean;
  sadaqah: boolean; 
};

export type DivineName = {
    arabic: string;
    french: string;
    meaning: string;
};