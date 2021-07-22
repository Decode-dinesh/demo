var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
]

// for loop
console.log("for loop");
for (i = 0; i < obj.length; i++) {
    console.log(obj[i]);
}

// for in
console.log("for in");
for (i in obj) {
    console.log(obj[i]);
}


//for of
console.log("for of");
for (let x of obj) {
    console.log(x);
}

// for each
obj.forEach(x => console.log(x));
