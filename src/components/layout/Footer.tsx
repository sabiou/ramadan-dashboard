import { FC } from 'react';
import { Heart } from 'lucide-react';

export const Footer: FC = () => {
    return (
        <footer className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-500 font-lora">
            Built with AI by{' '}
    <a
        href="https://github.com/sabiou"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-600 hover:text-indigo-500 transition-colors font-medium inline-flex items-center gap-1"
        >
        Your Husband to be<Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
        </a>
        </div>
        </footer>
);
};