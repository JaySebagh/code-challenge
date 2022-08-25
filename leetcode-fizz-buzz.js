// https://leetcode.com/problems/fizz-buzz/

// brainstorm/sudo code
// create an array to hold the numbers
// create a loop based on the input number
// if the number is divisable by 3 and 5 push FizzBuzz
// if the number is divisable by 3 and not 5 push Fizz
// if the number is not divisable by 3 but by 5 push Buzz
// if no conditions are met push the number as a string
// return the array

const fizzBuzz = function(num) {
    let sequence = [];
    let count = 1
    while(count < num + 1){
        if(count / 3 % 1 === 0 && count / 5 % 1 === 0){
            sequence.push("FizzBuzz");
        } else if(count / 3 % 1 === 0 && count / 5 % 1 !== 0) {
            sequence.push("Fizz");
        } else if(count / 3 % 1 !== 0 && count / 5 % 1 === 0){
            sequence.push("Buzz");
        } else {
            sequence.push(count.toString());
        }
        count++;
    };
    return sequence
};

console.log(fizzBuzz(15)) // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// other solutions

//Naive Approach

let fizzBuzz = function (n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        let temp = "";
        temp += i % 3 ? "" : "Fizz";
        temp += i % 5 ? "" : "Buzz";
        temp = !temp ? i.toString() : temp;
        
        arr.push(temp);
    }
    return arr;
};

// using hash map: code is flexible now, we can add more conditions 
//to the hash map without adding multiple if...else conditions

let fizzBuzz = (n) => {

    let hashMap = new Map();
    let arr = [];

    hashMap.set(3, "Fizz");
    hashMap.set(5, "Buzz");

    for (let i = 1; i <= n; i++) {
        let output = "";
        for (let key of hashMap.keys()) {
            if (i % key == 0) {
                //The Map object holds key-value pairs and remembers the original insertion order of the keys.
                //So 5 will be always checked after 3
                output += hashMap.get(key);
            }
        }
        if (output == "") {
            output = i.toString();
        }
        arr.push(output);
    }
    return arr;
};


// One line
let fizzBuzz = n => new Array(n).fill().map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || (i.toString()));
