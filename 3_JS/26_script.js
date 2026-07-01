//  SCOPE, CLOSURE AND HIGHER ORDER FUNCTION

if(true){
    let a = 10;
    var b = 20;
}
// console.log(b); // prints 20
// console.log(a); // throws error

function add(){
    var c = 30;
}
// console.log(c); // throws error
// var respects functional scope but not block scope while let and const respect both

/*
function create_counter(){

    function increment(){
        console.log("incrementing")
    }

    increment();
}
create_counter();


function create_counter(){

function increment(){
        console.log("incrementing")
    }
    return increment;
}
const counter = create_counter();
console.log(counter);
// whenever a function does not return anything, `undefined` gets returned
counter(); // now we can use this to call the function, because count has the reference for create_counter function

*/



// JavaScript runs one thing at a time on a single thread. Memory cleanup is handled automatically by the garbage collector whenever some data is no longer being used.