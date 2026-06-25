/* =============== OBJECT ================= */
// CRUD : Creat, Read, Update & Delete

// const user = {
//     name: "Pranshu",
//     age: 22,
//     amount: 3400,
//     email: "abc@gmail.com",
//     "home address": "UP"
// }

// console.log(user);
// console.log(user.age);

// user.aadhar = 1234;
// console.log(user);

// delete user.email;
// console.log(user);

// jS stores key as string
// console.log(user["age"]);
// console.log(user["home address"]);


const user = {
    name: "Pranshu",
    age: 22,
    amount: 3400,
    email: "abc@gmail.com",
    "home address": "UP"
}

const user2 = user; // copied by reference, hence user will also reflect the changes
user2.age = 50;

// console.log(user);
// console.log(Object.keys(user)); // gives all keys in an array
// console.log(Object.values(user)); // gives values in an array
// console.log(Object.entries(user)); // gives key-value pairs in an array

for(let keys in user){
    // console.log(keys);
    // console.log(keys, ":", user[keys]);
}

// destructuring of an object
// const {name, age} = user;
// console.log(name, age);
const {name: userName, age: userAge} = user;
console.log(userName, userAge);

// destructuring an array
const arr = [10,20,30,40,50,60];
const [first, second] = arr;
console.log(first, second); // first and second are just variables, they can be anything




