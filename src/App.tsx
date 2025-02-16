import { useState } from 'react';
import { RamadanCalendar } from './components/calendar/RamadanCalendar';
import { DivineNamesList } from './components/divine-names/DivineNamesList';
import { DailyGoals } from './components/DailyGoals';
import { DailyProgram } from './components/DailyProgram';
import { FocusPeriods } from './components/FocusPeriods';
import { HadithQuote } from './components/hadith/HadithQuote';
import { Layout } from './components/layout/Layout';
import { useProgress } from './hooks/useProgress';
import { DailySadaqah } from './components/DailySadaqah';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date('2025-02-28'));
  const { progressHistory, toggleBlock, toggleDailyGoal, isDayComplete } = useProgress(selectedDate);

  return (
    <Layout selectedDate={selectedDate}>
      <HadithQuote />
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-min">
          {/* Calendar Section - 2 columns wide */}
          <div className="lg:col-span-2">
            <RamadanCalendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              progressHistory={progressHistory}
              onToggleBlock={toggleBlock}
              isDayComplete={isDayComplete}
            />
          </div>

          {/* Divine Names - 1 column */}
          <DivineNamesList
            selectedDate={selectedDate}
            progressHistory={progressHistory}
            onToggleGoal={toggleDailyGoal}
          />
          
          <div className="space-y-6">
            <DailySadaqah
              selectedDate={selectedDate}
              progressHistory={progressHistory}
              onToggleGoal={toggleDailyGoal}
            />
            
            <FocusPeriods />
          </div>
          
          {/* Daily Program - 1 column */}
          <DailyProgram
            selectedDate={selectedDate}
            progressHistory={progressHistory}
            onToggleBlock={toggleBlock}
          />

          {/* Daily Goals - 1 column */}
          <div className="h-fit">
            <DailyGoals
              selectedDate={selectedDate}
              progressHistory={progressHistory}
              onToggleGoal={toggleDailyGoal}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}