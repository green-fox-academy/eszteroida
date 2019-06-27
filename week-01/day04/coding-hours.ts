let dailyHours: number = 6;
let weekNumbers: number = 17;
let daysPerWeek: number = 5;

console.log('Hours spent with coding per semester per attendee (only workdays!!!): ' + weekNumbers * daysPerWeek * dailyHours);

let avWorkHoursWeekly: number = 52;

console.log('Percentage of the coding hours in the semester: ' + (Math.round((dailyHours * 5) / avWorkHoursWeekly * 100)) + '%');