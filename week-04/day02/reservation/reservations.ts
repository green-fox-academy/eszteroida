'use strict';
// The booked reservations should look like the output below.
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)
// Booking# 1WBA3OMU for THU
// Booking# 0V5OH7VS for WED
// Booking# CV6QOAJO for MON
// Booking# 03GHEJMV for SAT
// Booking# M5JFB32I for THU -> one instance of the Reservation class
// Booking# W30PF0E0 for SAT
// Booking# S0R70GMN for SAT
// Booking# 3E032B3C for WED
// Booking# OD27E36J for SAT
// Booking# 4MEU0657 for MON

interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}

class Reservation implements Reservationy {
    days: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    constructor() { }

    getDowBooking() {
        return this.daysOfWeekRandom();
    }

    daysOfWeekRandom() {
        return this.days[Math.floor(Math.random() * 7)];
    }

    getCodeBooking() {
        return this.codeRandom();
    }

    codeRandom() {
        let result: string = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < 8; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }return result;
    }
}



let reservation = new Reservation();

// console.log(reservation.getCodeBooking());
// console.log(reservation.getDowBooking());
console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);
console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);
console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);
console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);
console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);
console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);
console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);
console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);
