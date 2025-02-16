import { DailyProgress } from '../types';

export const initializeDayProgress = (date: string): DailyProgress => ({
    date,
    blocks: [
        {
            time: "Avant l'Aube",
            worship: ["Prière de Tahajjud", "Récitation du Coran", "Adhkar du Matin"],
            completed: false
        },
        {
            time: "Heures de Travail",
            worship: ["Pauses pour Dhikr", "Coran pendant le trajet", "Prières Obligatoires"],
            completed: false
        },
        {
            time: "Soirée",
            worship: ["Maghrib + Coran", "Isha + Tarawih", "Adhkar du Soir"],
            completed: false
        }
    ],
    meditation: false,
    quranReading: false,
    tafsirSession: false,
    socialMediaFree: true,
    namesLearned: false,
    sadaqah: false
});

export const generateRamadanDays = () => {
    const days = [];
    const startDate = new Date('2025-02-28');

    for (let i = 0; i < 30; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        days.push(currentDate);
    }
    return days;
};