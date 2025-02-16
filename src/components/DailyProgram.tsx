import { FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal} from 'react';
import {Clock, CheckCircle2, AlertCircle} from 'lucide-react';
import {DailyProgress, TimeBlock} from '../types';
import {defaultBlocks} from '../data/defaultBlocks';

interface DailyProgramProps {
    selectedDate: Date;
    progressHistory: Record<string, DailyProgress>;
    onToggleBlock: (date: Date, index: number) => void;
}

export const DailyProgram: FC<DailyProgramProps> = ({
                                                        selectedDate,
                                                        progressHistory,
                                                        onToggleBlock
                                                    }) => {
    const currentDate = selectedDate.toISOString().split('T')[0];

    const dailyBlocks: TimeBlock[] = defaultBlocks.map((block: TimeBlock, index: number) => ({
        ...block,
        completed: progressHistory[currentDate]?.blocks?.[index]?.completed ?? false
    }));

    return (
        <section className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-5 w-5 text-amber-500"/>
                <h2 className="text-lg font-playfair font-medium text-gray-900">
                    Programme Quotidien
                </h2>
            </div>
            <div className="space-y-4">
                {dailyBlocks.map((block, blockIndex) => (
                    <div
                        key={`block-${blockIndex}`}
                        className={`p-4 rounded-lg border transition-colors ${
                            block.completed
                                ? 'bg-green-50 border-green-200'
                                : 'bg-white border-gray-200'
                        }`}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-playfair font-medium text-gray-900">
                                {block.time}
                            </h3>
                            <button
                                onClick={() => onToggleBlock(selectedDate, blockIndex)}
                                className={`p-1 rounded-full transition-colors ${
                                    block.completed ? 'text-green-600' : 'text-gray-400'
                                }`}
                            >
                                {block.completed ?
                                    <CheckCircle2 className="h-5 w-5"/> :
                                    <AlertCircle className="h-5 w-5"/>
                                }
                            </button>
                        </div>
                        <ul className="space-y-1">
                            {block.worship.map((item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, i: any) => (
                                <li 
                                    key={`worship-${blockIndex}-${i}`} 
                                    className="flex items-start space-x-2"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5" />
                                    <span className="text-sm font-lora text-gray-600">
                                        {item}
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