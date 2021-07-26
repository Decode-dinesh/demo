// 3) Do the below programs in arrow functions
//         Print odd numbers in an array 

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd = () => {
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(odd(array));


// 2)  Convert all the strings to title caps in a string array

var array = ['bmw', 'benz', 'lamborghini', 'porsche', 'bently', 'rollsroyce'];

var titleCap = (word) => {
    var arrayString = [];
    for (i = 0; i < word.length; i++) {
        var string = word[i][0].toUpperCase();
        for (j = 1; j < word[i].length; j++) {
            string += word[i][j].toLowerCase();
        }
        arrayString.push(string);
    }
    return arrayString;
}

console.log(titleCap(array));

// 3) Sum of all numbers in an array

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = (array) => {
    return array.reduce((a, b) => a + b);
}
console.log(sum(array));


// 4) Return all the prime numbers in an array

var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 20];

var prime = () => {
    array = array.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(array);
}

prime();

// 5) Return all the palindromes in an array

var array = ["guvi", "geek", "eye", "nun", "keek", "apple", "abba", ];

var palindrome = (array) => {
    var newArray = array.filter(str => {
        var reverseStr = str.split("").reverse().join("");
        if (str === reverseStr) return str
    });

    return newArray;
}

console.log(palindrome(array));
