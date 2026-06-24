// in JS type of array is an object

// let marks = [100, 50, 70, 80, 90];
// console.log(marks);
// console.log(marks.length);


// let arr = [100, 30, "pranshu", true];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[2][3]);
// console.log(typeof(arr)); // its an object, objects are mutable, hence array is mutable
// console.log(arr);


// add at the end
// arr.push(100);
// console.log(arr);


// delete from the end
// arr.pop();
// console.log(arr);


/* we do not usually use shift and unshift methods, as it affects the performance of the device, because it requires a lot of operations */
// add at the front
// arr.unshift(1000);
// arr.unshift(500);
// arr.unshift(5);
// console.log(arr);

// delete from front
// arr.shift();
// console.log(arr);


let arr = [10,30,50,90,11];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }



// non-primitive : copied by reference 
// primitive : copied by value 
// let arr2 = arr;
// arr2.push(30);
// console.log(arr); // both wil change because arrays are copied by reference
// console.log(arr2);


// below is not posible
// const arr = [10,20,30,40,50,60,70];
// arr = [80,80,90];
// console.log(arr);

