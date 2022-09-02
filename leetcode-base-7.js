// https://leetcode.com/problems/base-7/

// brainstorm/sudo code
// divide by 7, take whole number part of answer, multiply by 7, subtract the two whole numbers
// repeat using the first whole number
// example:
// 7508 / 7 = 1072.571429
// 1072 * 7 = 7504
// 7508 - 7504 = 4
// store the 4
// repeat process using 1072 until 0 is reached
// edge case: negative numbers

// only functional for positive numbers
const convertToBase7 = function(num){
    let remainders = []
    while(num > 0){
        const divideBy7 = Math.trunc(num / 7);
        const multiplyBy7 = divideBy7 * 7;
        const subtract = num - multiplyBy7;
        remainders.unshift(subtract)
        num = divideBy7;
    }
    return remainders.join("")
};

console.log(convertToBase7(7508)) // 30614
console.log(convertToBase7(100)) // 202
console.log(convertToBase7(-7)) // -10

// other solutions

const convertToBase7 = function(num) {
    if(num < 0) return '-' + convertToBase7(num*(-1));
    if(num < 7) return num.toString();
    return convertToBase7(Math.floor(num/7)) + (num%7).toString();
};

