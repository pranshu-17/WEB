let a = 345.4443523523;
c= a.toFixed(4); // rounds off to 4 decimal places
console.log(c); // returns a string without changing value of a


console.log(a.toPrecision(4)); // returns 4 numbers form starting of a, (rounds off the last number)
      
console.log(a.toString());
   
   
let d = new Number(20); // creates a number as an object
console.log(typeof(d));


// in primitive datatypes comparison is done wrt value
// in non-primitive datatypes comparison is done wrt reference