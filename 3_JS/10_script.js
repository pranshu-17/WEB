console.log(Math.LN10);
console.log(Math.ceil(2.3));
console.log(Math.floor(2.3));
console.log(Math.max(10,20,30));
console.log(Math.min(10,20,30));
console.log("random = ", Math.random()); // between [0,1);
console.log((Math.random() * 10).toPrecision(1)); // random number between 0-9

console.log(Math.floor(Math.random()*6));
// Math.floor(Math.random() * total number of outcomes) + shift
// Math.floor(Math.random() * (max - min + 1)) + min // same as above

// OTP generation
console.log(Math.floor(Math.random()*(9999 - 1000 + 1)) + 1000);

// seed == input, seed is not secure as it could be guessed, that is why math.random is not used to generate random numbers for secure platforms. To solve this we use crypto library (mouse pointer coordinates, cpu usage etc) to generate seed (these cant be guessed.)
