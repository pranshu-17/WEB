//1st method of function creation : we can call the function before its creation (js hoisting stuff)
// console.log(add(2,3));

// function add(num1, num2){
//     return num1 + num2;
// }



//2nd Method of creating function : throws error = Cannot access 'add' before initialization
console.log(add(3,4)); // 7

const add = function(num1, num2){
    return num1 + num2;
}
