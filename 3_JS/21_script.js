// creation 
function greeting(){
    console.log("hello there");
}

// greeting();

function add(num1, num2, num3 = 0, num4 = 0){
    return num1 + num2 + num3 + num4;
}

// console.log(add(2,3));
// console.log(add(2,3,4));


//VERY IMPORTANT OPERATOR (spread and rest)
// rest operator : creates an array from given inputs (used when we do not know the number of arguments)
function add(...num){
    let sum = 0;
    for(let number of num){
        sum += number;
    }
    return sum
}

// console.log(add(2,3,4,5));
// console.log(add(1,2,3,4,5));


// spread vs rest operator

const arr = [10, 20, 30, 40, 50];
const [first, second, ...num] = arr; // rest operator : used to catch a lot of individual values
// console.log(first, second, num); // 10 20 [ 30, 40, 50 ]

const arr2 = [30,60,70,30,20];
const ans = [...arr, ...arr2]; // spread operator : used to spread elements, used on arrays, objects etc
// console.log(ans);


/*
1) Spread Operator (...) : Spread means expand or unpack an iterable (array, string, etc.) or an object into individual elements/properties. (ONE -> MANY)
   
    a) copying an array
        const arr = [1,2,3,4]
        const arr2 = arr; // both arr and arr2 point to the same array
        const arr2 = [...arr] // a new array is created for arr2

    b) merging arrays
        const a = [1,2]
        const b = [3,4]
        const c = [...a, ...b]
        const c = [...a, ...b] // [1,2,3,4]

    c) passing array elements as function arguments
        function add(a, b, c) {
            return a + b + c;
        }
        const nums = [10, 20, 30];
        console.log(add(...nums)); // 60

    d) Merging objects
        const a = {
            name: "Himanshu"
        };
        const b = {
            age: 20
        };
        const c = {
            ...a,
            ...b
        };
        console.log(c); // output {
                                    name: "Himanshu",
                                    age: 20
                                }


                            
2) Rest operator: Rest means collect multiple values into one variable. (MANY -> ONE)

    a) function parameters
        function sum(...numbers) {
            console.log(numbers);
        }

    b) Array destructuring
        const arr = [10,20,30,40,50];
        const [a, b, ...rest] = arr;
        console.log(a); // 10
        console.log(b); // 20
        console.log(rest); // [30,40,50] 

    c) 
*/