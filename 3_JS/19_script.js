// nested objects

const user = {
    name: "pranshu",
    age: 20,
    email: "abc@gmail.com",
    acc: 1234,
    address: {
        city: "lucknow",
        state: "UP"
    }
}
// console.log(user.address);
// console.log(user.address.city);
// console.log(user.address.state);


// const user2 = user; // user2 and user are same 
//SHALLOW COPY
const user2 = {...user}; // now they both are independent

user2.name = "pallavi";

// console.log(user.name);
// console.log(user2.name);

// but but but
user2.address.city = "kanpur";
// console.log(user.address.city);
// console.log(user2.address.city);
// here both will get updated, because spread operator(...) creates a shallow copy, ie primitive values are copied by value, while non-primitives like nested objects, array, map, function etc are copied by reference

// to solve above issue
// DEEP COPY
const user3 = structuredClone(user);
user3.name = "rohit";
user3.address.city = "prayagraj";

console.log(user.address.city);
console.log(user3.address.city);
// this time a deep copy is created


    //============= NOTE ===========
// dont use structured clone in case ur object contains functions, as it can not manage them