// Do the below programs in anonymous function & IIFE
//   1) Print odd numbers in an array 


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var odd = function(array) {
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};
console.log(odd(array));

// 2)  Convert all the strings to title caps in a string array

var array = ['bmw', 'benz', 'lamborghini', 'porsche', 'bently', 'rollsroyce'];

var titleCap = function(word) {
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

var sum = function(array) {
    return array.reduce((a, b) => a + b);
}
console.log(sum(array));


// 4) Return all the prime numbers in an array

var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 20];

var prime = function() {
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

var palindrome = function(array) {
    var newArray = array.filter(str => {
        var reverseStr = str.split("").reverse().join("");
        if (str === reverseStr) return str
    });

    return newArray;
}

console.log(palindrome(array));

// 6) Return median of two sorted arrays of same size
// var num1 = [1, 4, 9, 7, 5, 7];
// var num2 = [2, 4, 8, 8, 9, 9];

// var median = function(num1, num2) {
//     var newArray = [...num1, ...num2],
//         s, len = newArray.length;
//     newArray.sort(((x, y) => x - y));
//     s = (newArray[len / 2] + newArray[len / 2 + 1]) / 2
//     return 2;
// }

// console.log(median(num1, num2));

// 7) Remove duplicates from an array

var array = ["apple", "guvi", 2, 4, 6, 8, 9, "apple", 2, 6];
var unique = function(array) {
    var newArray = [...new Set(array)];
    return newArray;
}

console.log(unique(array));


// 8) Rotate an array by k times 

var array = [1, 2, 3, 4, 5, 7, 8, 9],
    K = 6;

var rotated = function(array, K) {
    for (var i = 0; i < K; i++) {
        var t = array.shift();
        array.push(t)
    }
    return array;
}

console.log(rotated(array, K));
