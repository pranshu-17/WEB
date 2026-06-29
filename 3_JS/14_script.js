const arr = [10,20,30,40,50,60];
// const arr2 = arr.slice(2,5);
// console.log(arr);
// console.log(arr2); // different array gets created => [ 30, 40, 50 ]

/* SPLICE */
// arr.splice(1, 3); // from index 1 of arr remove 3 elements =>  
// console.log(arr); // [ 10, 50, 60 ]
// arr.splice(2, 0, "pranshu", "Raj", 15, 25);
// console.log(arr); // [ 10, 20, 'pranshu', 'Raj', 15, 25, 30, 40, 50, 60 ]

/* NOTE (difference between slice and splice)
1) slice does not modify the original array while splice does
2) slice returns a new array, while splice returns removed element
*/

const arr2 = ["pranshu", 11, true];
const arr3 = ["pallavi", 12, false];

// arr.push(arr2);
// console.log(arr); // pushes the whole arr2 as an item inside arr => [ 10, 20, 30, 40, 50, 60, [ 'pranshu', 11, true ] ]

// below method concatenates the strings
// const arr4 = arr.concat(arr2, arr3);
// console.log(arr4); // [10,20,30,40,50,60, "pranshu", 11, true, "pallavi", 12, false] 

// below method prints all 3 arrays as an item inside another array
// const arr4 = [arr, arr2, arr3];
// console.log(arr4); // [[10,20,30,40,50,60], ["pranshu", 11, true], ["pallavi", 12, false]] 

/*SPREAD OPERATOR : adds all items of all arrays inside one (individually)*/
const arr4 = [...arr, ...arr2, ...arr3];
// console.log(arr4); // [10,20,30,40,50,60, "pranshu", 11, true, "pallavi", 12, false] 


const names = ["pranshu", "pallavi", "rohit", 1];
// console.log(names.toString()); // pranshu,pallavi,rohit,1

const a = names.join(" ")
// console.log(a); //pranshu pallavi rohit 1
// console.log(typeof(a)); // string