// let z = "10"
// let a = Number(z);

// console.log(typeof(a));



let a = 10;
let b = "10";

console.log(a == b); // js automatically converts the string stored in b to a number and then compares 

console.log(a === b); // strict check operator(first compare the type of both a and b)


let c = "123ac";
let d = Number(c);

console.log(d); // return NaN (not a number)

let e = 15;
let f = String(e);

console.log(f);
console.log(typeof(f));


console.log(Number(null)); // returns 0
console.log(Number(undefined)); // returns NaN