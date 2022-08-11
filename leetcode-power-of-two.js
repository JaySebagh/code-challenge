// https://leetcode.com/problems/power-of-two/
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

// brainstorm/sudo code
// keep dividing the input by 2
// if 1 return true
// else return false

// recursive solution but much slower than other submissions
const isPowerOfTwo = function(num) {
    if(num === 0 || !Number.isInteger(num)) return false;
    if(num === 1) return true;
    return isPowerOfTwo(num / 2);
};

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false

// other solutions

const isPowerOfTwo = function(num) {

    let total = 1;
    
    while (total < num) {
        total *= 2;
    }
    
    return total === num; 
};

//

const isPowerOfTwo = function(num) {
    // log2 returns "x" in 2^x === num
    // % is modulo, which returns the remainder of two numbers divided. In this case it checks if Math.log2(num) is a whole number.
    return Math.log2(num) % 1 === 0;
};
