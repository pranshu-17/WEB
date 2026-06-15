let a = 0.1;
let b = 0.2;
let c = a + b;

console.log(c); // 0.30000000000000004: this is the output, because when we convert decimal to binary, sometimes it may not be exact rather its more like an approximate conversion


// to handle this we could use strings

a = String(a);
b = String(b);
c = (a - '0.0') + (b - '0.0');

console.log(c);