/* Datatypes

1) Primitive datatypes : number, string, boolean, undefined, null, bigint, symbol

*/

let a = 2;
let b = "pranshu";
let c = 'Pallavi'

// console.log(a,b);
// console.log(c);

// Undefined : gives undefined as output when value is not assigned to a variable. (const variable must be given a value or it will throw an error)
let user;
console.log(user) 


//bigint : end the number with n
let num = 8743917590709347565654646616161662615161616166565n;
console.log(num);


/* null : intentional absence of value
1) null is used when we are unable to fetch data of a particular thing
2) undefined is used when that particular thing doesn't even exist
*/
let weather = null;
console.log(weather);

// symbol : generates a unique value
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);