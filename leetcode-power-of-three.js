// https://leetcode.com/problems/power-of-three/

const isPowerOfThree = function(num) {
    return Math.log10(num) / Math.log10(3) % 1 === 0
};

// other solutions

// https://leetcode.com/problems/power-of-three/discuss/77876/**-A-summary-of-all-solutions-(new-method-included-at-15%3A30pm-Jan-8th)
