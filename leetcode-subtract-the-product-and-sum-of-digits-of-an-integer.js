// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// brainstorm/sudo code
// split num
// reduce multiplying each value
// reduce adding each value
// subtract the two

const subtractProductAndSum = function(num) {
    const digits = Array.from(String(num), Number);
    const multiply = digits.reduce((a, b) => a * b);
    const add = digits.reduce((a, b) => a + b);
    return multiply - add
};

console.log(subtractProductAndSum(234)) // 15
console.log(subtractProductAndSum(4421)) // 21
