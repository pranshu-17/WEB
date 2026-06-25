const user = {
    name: "Pranshu",
    age: 23,
    gender: "male",
    email: 1234
}

// for in loop has some drawbacks, so we use for of loop

for(let keys of Object.keys(user)){
    // console.log(keys);
}

for(let values of Object.values(user)){
    // console.log(values);
}

for(let entries of Object.entries(user)){
    // console.log(entries);
}

// destructuring
for(let [keys, value] of Object.entries(user)){
    console.log(keys, value);
}
