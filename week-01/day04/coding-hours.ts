'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailyHours: number = 6;
let weekNumbers: number = 17;
let daysPerWeek: number = 5;

console.log('Hours spent with coding per semester per attendee (only workdays!!!): ' + weekNumbers * daysPerWeek * dailyHours);

let avWorkHoursWeekly: number = 52;

console.log('Percentage of the coding hours in the semester: ' + (Math.round((dailyHours * 5) / avWorkHoursWeekly * 100)) + '%');