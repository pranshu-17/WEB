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
const [first, second, ...num] = arr; // rest operator
// console.log(first, second, num); // 10 20 [ 30, 40, 50 ]

const arr2 = [30,60,70,30,20];
const ans = [...arr, ...arr2]; // spread operator : used to spread elements, used on arrays, objects etc
console.log(ans);
