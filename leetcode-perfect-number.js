// https://leetcode.com/problems/perfect-number/

// brainstorm/sudo code
// create an array
// loop through the num and check if it is divisable by numbers 1-9
// if it is, add it to the array as well as num divided by said number
// check if the sum === num

// using array
const checkPerfectNumber = function(num) {
    if(num === 1) return false;
    
    let divisors = [1];
    
    for(let i = 2; i < Math.floor(num / 2); i++){
        if(num % i === 0 && !divisors.includes(num / i)) divisors.push(i, num / i);
    };
    
    return divisors.reduce((a, b) => a + b) === num;
};

// using Set
const checkPerfectNumber = function(num) {
    if(num === 1) return false;
    
    let sum = 0;
    let divisors = new Set([1]);
    
    for(let i = 2; i < Math.floor(num / 2); i++){
        if(num % i === 0) divisors.add(i).add(num / i);
    };
    
    divisors.forEach(num => sum += num);
    
    return sum === num;
};

console.log(checkPerfectNumber(28)); // true 1, 2, 4, 7, 14
console.log(checkPerfectNumber(7)); // false 1
console.log(checkPerfectNumber(100000000)); // false
console.log(checkPerfectNumber(1));  // false
console.log(checkPerfectNumber(496)); // true 1, 2, 4, 8, 16, 31, 62, 124, 248

// other solutions

const checkPerfectNumber = function(num) {
    if (num <= 1) return false;
    
    let sum = 0;
    
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num% i ===0) {
            sum += i + num / i;
        }
    }

    return sum === 2 * num;
};
