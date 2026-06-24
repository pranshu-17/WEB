const arr = [10,20,30,40,50,60];
// const arr2 = arr.slice(2,4);
// console.log(arr);
// console.log(arr2); // different array gets created

/* SPLICE */
// arr.splice(1, 3); // from index 1 of arr remove 3 elements 
// console.log(arr);
// arr.splice(2, 0, "pranshu", "Raj", 15, 25);
// console.log(arr);

/* NOTE (difference between slice and splice)
1) slice does not modify the original array while splice does
2) slice returns a new array, while splice returns removed element
*/

const arr2 = ["pranshu", 11, true];
const arr3 = ["pallavi", 12, false];

// arr.push(arr2);
// console.log(arr); // pushes the whole arr2 as an item inside arr

// below method concatenates the strings
// const arr4 = arr.concat(arr2, arr3);
// console.log(arr4);

// below method prints all 3 arrays as an item inside another array
// const arr4 = [arr, arr2, arr3];
// console.log(arr4);

/*SPREAD OPERATOR : adds all items of all arrays inside one (individually)*/
const arr4 = [...arr, ...arr2, ...arr3];
// console.log(arr4);


const names = ["pranshu", "pallavi", "rohit"];
console.log(names.toString());

console.log(names.join(" "));