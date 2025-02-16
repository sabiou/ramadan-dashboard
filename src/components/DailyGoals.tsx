import { FC } from 'react';
import { Sun, Brain, BookOpen, Users, Smartphone, CheckCircle2 } from 'lucide-react';
import { DailyProgress } from '../types'; // Import the DailyProgress type

interface DailyGoalsProps {
  selectedDate: Date;
  progressHistory: Record<string, DailyProgress>; // Update this type
  onToggleGoal: (date: Date, goal: keyof DailyProgress) => void; // Update this type
}

const goals = [
  {
    icon: <Brain className="h-5 w-5 text-purple-500" />,
    title: "10min méditation intense",
    goal: 'meditation' as keyof DailyProgress
  },
  {
    icon: <BookOpen className="h-5 w-5 text-emerald-500" />,
    title: "Memorisation Quran",
    goal: 'quranReading' as keyof DailyProgress
  },
  {
    icon: <Users className="h-5 w-5 text-blue-500" />,
    title: "Assister au Tafsir",
    goal: 'tafsirSession' as keyof DailyProgress
  },
  {
    icon: <Smartphone className="h-5 w-5 text-rose-500" />,
    title: "Détox Réseaux Sociaux",
    goal: 'socialMediaFree' as keyof DailyProgress
  }
];

export const DailyGoals: FC<DailyGoalsProps> = ({
  selectedDate,
  progressHistory,
  onToggleGoal
}) => {
  const currentDate = selectedDate.toISOString().split('T')[0];

  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Sun className="h-5 w-5 text-amber-500" />
        <h2 className="text-lg font-playfair font-medium text-gray-900">
          Objectifs du Jour
        </h2>
      </div>
      <div className="space-y-3">
        {goals.map((goal) => (
          <div
            key={goal.title}
            className={`p-3 rounded-lg border transition-colors ${
              progressHistory[currentDate]?.[goal.goal]
                ? 'bg-green-50 border-green-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {goal.icon}
                <span className="font-playfair text-gray-900">{goal.title}</span>
              </div>
              <button
                onClick={() => onToggleGoal(selectedDate, goal.goal)}
                className={`p-1 rounded-full transition-colors ${
                  progressHistory[currentDate]?.[goal.goal]
                    ? 'text-green-600'
                    : 'text-gray-400 hover:text-gray-500'
                }`}
              >
                <CheckCircle2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};