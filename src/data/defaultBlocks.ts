import { TimeBlock } from '../types';

export const defaultBlocks: TimeBlock[] = [
    {
        time: "Avant l'Aube",
        worship: [
            "Prière de Tahajjud",
            "Récitation du Coran + Istighfar",
            "Adhkar du Matin",
            "Taches domestiques"
        ],
        completed: false
    },
    {
        time: "Heures de Travail",
        worship: [
            "Multiplier Dhikr",
            "Ecouter le Coran en fond",
            "Invocations pendant mes pauses Pommodro"
        ],
        completed: false
    },
    {
        time: "Soirée",
        worship: [
            "Adhkar du Soir",
            "Maghrib",
            "Revision Coran : 10-20 minutes",
            "Isha + Tarawih",
            "Coran du soir: Mulk, Waqiah, Sajdah",
            "Quran 30 for 30 serie by Yaqeen",
            "Ramadan serie by Yaqeen - Dr Omar Suleiman",
            "Preparation journée suivante",
            "Préparation au sommeil : Dormir avec des intentions pures"
        ],
        completed: false
    }
];