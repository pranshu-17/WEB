/* HOISTING IN JAVASCRIPT : Hoisting is a JavaScript behavior where variable and function declarations are available before their actual declaration in the code. For example, variables declared with var are hoisted and initialized with undefined, while let and const are hoisted but cannot be accessed before their declaration. Function declarations are fully hoisted, so they can be called before they are defined in the code.

1) whenever we run a code in js => execution context is created

2) There are two phases : a) Memory Allocation b) Execution 

3) Memory allocation phase: allocates memory to variables and stores "undefined" in that memory space and for functions it allocates the memory for it in heap and stores the whole function code in that memory(stores the address of this memory in stack)

- first of all the global variables will be allocated the memory, and functional variables will get the memory when the function gets called   

4) Execution Phase : reads the code again and now variables will get their values and functions will be called

- When a function is called, again an execution context is created. First the memory will be allocated and then the code will be executed

- function is an object, and its whole code is stored inside heap 

- As soon as the code gets executed, all the memory allocated to the global execution context's variables and functions will be freed from stack and garbage collector removes the memory acquired by above from the heap 

*/

// follows above pattern in case of var
// console.log(a); // undefined
// var a = 10;
// console.log(a); // 10


  

// In case of 'let' and 'const' => a = <uninitialised> (Temporal Dead Zone) :  we cant use these variables until and unless it gets some value
// console.log(b); // throws error
// const b = 10;
// console.log(b);   
   

// example (same for const and let);

/* MEMORY ALLOCATION PHASE : 
a = <uninitialised> (Temporal Dead Zone)
b = <uninitialised> (Temporal Dead Zone)
add = <uninitialised> (Temporal Dead Zone)

EXECUTION PHASE : 
a = 10
b = 20
then throws error because add is still in TDZ

*/

let a = 10;
let b = 20;

console.log(add(a,b));

const add = function(num1, num2){
    const sum = num1 + num2;
    return sum;
}

