// Arrow functions

// const print = ()=>{
//     console.log("hello there");
// } 
// print();



// const add = (...nums)=>{
//     let sum = 0;
//     for(num of nums){
//         sum += num;
//     }
//     console.log(sum);
// }
// add(2,3,4,5);



// no need of {} and return keyword when we have only one return code inside the function
// const add2 = (num1, num2) => num1 + num2;
// console.log(add2(2,3));



// no need of brackets() when we have only one parameter
// const square = num => num*num;
// console.log(square(5));



// IIF : immediately invoked function
(function greeting(){
    console.log("hi");
})();

(()=>{
    console.log("hello");
})();