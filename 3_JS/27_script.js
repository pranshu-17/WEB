/*A closure is a function which is created when a function remembers and can access variables from its outer scope even after the outer function has finished executing.


*/


function create_counter(){
    let count = 0;
    function increment(){
        count++;
        return count;
    }
    return increment;
}
const counter = create_counter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// here it remembers count variable after execution of the function is completed, basically it pushes count into the heap for rememberance

/* use case of closure
- Closures are useful when we want to preserve data between function calls, such as in counters, private variables, event handlers, and callbacks.
*/

function bank(){
    const balance = 500
}

   




/* NOTE
- let: value can be reassigned 
- const : value cant be reassigned
   
*/