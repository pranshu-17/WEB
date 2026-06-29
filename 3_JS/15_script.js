// Lexicographic comparison
const arr = ["pranshu", "aalu", false, "rohit", "Rohit", "a", "A",3 , 4, true];

// ascending order
// arr.sort();
// console.log(arr); // [3, 4, 'A', 'Rohit', 'a', 'aalu', false, 'pranshu', 'rohit', true]


// arr.reverse(); // reverses the order of arr
// console.log(arr); 


//descending order
// arr.sort();
// arr.reverse();
// console.log(arr);


// lexicographic comparison, js considers number 3 as "3" and 18 as "18" : since 1 < 8 so 18 comes before 3  
// const arr = [10, 18, 3, 100, 43, 15, 1];
// arr.sort();
// console.log(arr);


// proper sorting
const arr2 = [10, 18, 3, 100, 43, 15, 1];

// for ascending order
// if a - b is negative : correct order
// if a - b is positive : wrong order, change it
// arr2.sort((a,b) => a-b);
// console.log(arr2); // [1, 3, 10. 15, 18, 43, 100]

//for descending order
// arr2.sort((a,b) => b-a);
// console.log(arr2);

// flattening an array
// const arr = [10, 30, 50, [40, 90, 11, [10,20,30, ["rohit", "10"]]], 80];
// const a = arr.flat(); // 1 level flat
// const a = arr.flat(2); // 2 level flat
// const a = arr.flat(3); // 3 level flat
// const a = arr.flat(Infinity); // infinite level flat
// console.log(a);

