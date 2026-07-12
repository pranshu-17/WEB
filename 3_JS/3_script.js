/* NON-PRIMITIVE DATATYPES
-> type of all these non-primitive datatypes is object.
*/

//array
let arr = [1, 2, 3, 'pranshu', true];
console.log(arr);   
  
//object
let user = {  
    name: "Pranshu",
    account: 1234,
    age: 18
}


//function
function add(){
    console.log("hi");
}
add(); 

//in js we can store a function inside a variable
let s = function add(){
    console.log("hi");
}
s();
console.log(s);

console.log(typeof(s));
console.log(typeof(user));

console.log(typeof(arr)); // returns object

let name = null;
console.log(typeof(name)); // returns object as type(bug)


/*
1) Primitive datatypes are immutable

2) Non-Primitive datatypes are mutable

*/

let obj ={
    name: "Pranshu",
    age: 23, 
    college: "IITK"
}
obj.name = "Pallavi";
console.log(obj);


