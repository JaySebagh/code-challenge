// https://leetcode.com/problems/power-of-four/submissions/

const isPowerOfFour = function(num) {
    return Math.log(num) / Math.log(4) % 1 === 0
};

console.log(isPowerOfFour(0)) // false
console.log(isPowerOfFour(1)) // true
console.log(isPowerOfFour(2)) // false
console.log(isPowerOfFour(3)) // false
console.log(isPowerOfFour(4)) // true
console.log(isPowerOfFour(5)) // false
console.log(isPowerOfFour(16)) // true
