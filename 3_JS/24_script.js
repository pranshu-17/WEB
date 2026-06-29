// // Call-back function

// function greet(){
//     console.log("hello there");
// }

// function meet(callback){
//     console.log("our first meet");
//     callback();
//     console.log("finished greeting");
// }

// meet(greet()); // hello there
                  // our first meet

// meet(greet); // our first meet
                // hello there

// meet(greet); // our first meet
             // hello there
             // finished greeting


// real world usage

function blinkit(){
    console.log(`We are packing your order`);
}

function zomato(){
    console.log(`Your food is being prepared`);
}

function payment(amount, callback){
    console.log(`Payment of Rs ${amount} is received`);
    callback();
}

// payment(500, zomato);
payment(500, blinkit);