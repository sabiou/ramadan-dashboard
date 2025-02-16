import {FC} from 'react';

export const CalendarHeader: FC = () => {
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

    return (
        <>
            {days.map(day => (
                <div
                    key={day}
                    className="text-center text-sm font-playfair font-medium text-gray-500 py-2"
                >
                    {day}
                </div>
            ))}
        </>
    );
};