let arr = [{
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'joey',
        age: 3,
        type: 'dog'
    },
]

// filter


const dogs = arr.filter(a => a.type === "dog");
console.log(dogs);


// map 


const ages = arr.map((a) => {
    return a.age * 5;
});
console.log(ages);


//  reduce

let sum = arr.reduce((a, b) => {
    return a + b.age;
}, 0);
console.log(sum);
