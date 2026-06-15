// null is loosely equal to undefined
console.log(null == undefined); // true only in this case
console.log(null === undefined); // false

// whenever we use [<, >, <=, >=] : null changes to 0 and undefined changes to NaN
console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null == 0); // false
console.log(undefined >= 0); // false

// whenever we compare two variables of different type, they will first get converted to number

console.log(NaN == NaN); // false