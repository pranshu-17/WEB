const user = {
    name: "pranshu",
    age: 23,
    0: 100,
    2: "mohan"
}

// console.log(user.2);// wrong
console.log(user[0]);
console.log(user["2"]);

// keys can be string or symbol   
const sym = Symbol("id");
const user2 = {
    name: "pallavi", 
    age: 20,
    0: 200,
    2: "rohan",
    [sym]: "HI, everyone"    
}

// console.log(user2.sym);  || wrong
console.log(user2[sym]);
   
