import { FC } from 'react';

export const HadithQuote: FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
        <blockquote className="text-center">
        <p className="font-playfair text-lg text-gray-800 italic mb-2">
            Le Prophète <span className="font-amiri">ﷺ</span> a dit :
            « Certes les actes les plus aimés par Allah sont ceux qui sont fait avec assiduité même s'ils sont peu nombreux »
    </p>
    <footer className="text-sm text-gray-600 font-lora">
        Rapporté par Mouslim dans son Sahih n°782
    </footer>
    </blockquote>
    </div>
    </div>
);
};