interface HijriDate {
  day: number;
  month: string;
  year: number;
}

export const getHijriDate = (date: Date): string => {
  // Convert date to string for comparison
  const dateStr = date.toISOString().split('T')[0];
  
  // Known mappings
  const dateMap: Record<string, HijriDate> = {
    '2025-02-28': { day: 29, month: "Sha'ban", year: 1446 },
    '2025-03-01': { day: 1, month: "Ramadan", year: 1446 },
    // Add more mappings as needed
  };

  // If we have a direct mapping, use it
  if (dateMap[dateStr]) {
    const { day, month, year } = dateMap[dateStr];
    return `${day} ${month} ${year}`;
  }

  // If no mapping found, calculate based on known start date
  const startDate = new Date('2025-02-28');
  const diffTime = date.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let currentDay = 29; // Start with 29 Sha'ban
  let currentMonth = "Sha'ban";
  let currentYear = 1446;

  // Adjust date
  currentDay += diffDays;
  if (currentDay > 29) { // Sha'ban ends
    currentDay -= 29;
    currentMonth = "Ramadan";
  }

  return `${currentDay} ${currentMonth} ${currentYear}`;
};

export const isFriday = (date: Date): boolean => {
    return date.getDay() === 5;
};

export const isLastTenDays = (date: Date): boolean => {
    const startDate = new Date('2025-02-28');
    const dayNumber = Math.floor((date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return dayNumber > 20;
};

export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};