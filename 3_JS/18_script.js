const user = {
    name: "Pranshu",
    age: 23,
    gender: "male",
    aadhar: 1234,
    greeting: function(){
        // console.log(`hello there, ${user.name} here`); // not preferred
        console.log(`hello there, ${this.name} here`); // this stores the reference of the current object
        return 2;
    } 
}


// const val = user.greeting();
// console.log(val);

user2 = {
    name: "pallavi",
    age: 20,
}

user2.greeting = user.greeting;
user2.greeting(); // this will print pallavi(because `this` keyword is used inside greeting function of user, if we would had used user.name, it would had printed 'pranshu')