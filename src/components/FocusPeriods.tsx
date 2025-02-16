import {FC} from 'react';
import {Heart, Sparkles, Scale, Moon} from 'lucide-react';

const periods = [
    {
        title: "Premiers 10 Jours",
        actions: [

        ],
        icon: Sparkles,
        color: "blue"
    },
    {
        title: "10 Jours du Milieu",
        actions: [

        ],
        icon: Scale,
        color: "indigo"
    },
    {
        title: "Derniers 10 Jours",
        actions: [

        ],
        icon: Moon,
        color: "purple"
    }
];

export const FocusPeriods: FC = () => {
    return (
        <section className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-5 w-5 text-rose-500"/>
                <h2 className="text-lg font-playfair font-medium text-gray-900">
                    Focus sur 10 Jours
                </h2>
            </div>
            <div className="space-y-6">
                {periods.map((period, index) => (
                    <div
                        key={index}
                        className={`rounded-lg p-4 space-y-3
              ${period.color === 'blue' ? 'bg-blue-50' :
                            period.color === 'indigo' ? 'bg-indigo-50' :
                                'bg-purple-50'}`}
                    >
                        <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg 
                ${period.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                period.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                                    'bg-purple-100 text-purple-600'}`}
                            >
                                <period.icon className="h-5 w-5"/>
                            </div>
                            <h3 className="font-playfair font-medium text-gray-900">
                                {period.title}
                            </h3>
                        </div>

                        <ul className="space-y-2">
                            {period.actions.map((action, actionIndex) => (
                                <li
                                    key={actionIndex}
                                    className="flex items-start space-x-2 text-sm"
                                >
                                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5
                    ${period.color === 'blue' ? 'bg-blue-400' :
                                        period.color === 'indigo' ? 'bg-indigo-400' :
                                            'bg-purple-400'}`}
                                    />
                                    <span className="text-gray-600 font-lora">
                    {action}
                  </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};