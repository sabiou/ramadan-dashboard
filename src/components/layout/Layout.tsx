import { FC, ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
    children: ReactNode;
    selectedDate: Date; 
}

export const Layout: FC<LayoutProps> = ({ children, selectedDate }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-lora">
            <Header selectedDate={selectedDate} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};