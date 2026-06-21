// const now = new Date();
// console.log(now); // shows the UTC (Universal Time Coordinate) time

// console.log(now.toString()); // extracts time from the device
// console.log(now.toLocaleDateString()); // gives date
// console.log(now.toLocaleString()); // gives date and time
// console.log(now.getDay()); // gives day=> 0 : sunday and so on
// console.log(now.getDate()); // gives date



// days : 0-based
// month : 0-based

//                  (year, month, date, hour, minute, second, millisecond)
// const now = new Date(2025, 8, 20, 8, 25, 16, 125);
// console.log(now.toLocaleString()); // 8 means september(0-based)



// UTC time is same everywhere in every country
const now = Date.now();
console.log(now); // 1782040703419 (time in ms) counted from thursday jan 1, 1970
const dates = new Date(now);
console.log(dates.toLocaleDateString());


