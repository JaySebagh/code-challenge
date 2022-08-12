// https://leetcode.com/problems/missing-number/

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// brainstorm/sudo code
// calculate the sum of the array
// calculate what the sum of the entire array including the missing number should be
// subtract

const missingNumber = function(nums) {
    const numsSum = nums.reduce((a, b) => a + b);
    console.log(numsSum)
    let totalSum = 0;
    
    for(let i = 1; i < nums.length + 1; i++){
        totalSum += i;
    };

    return totalSum - numsSum
};

console.log(missingNumber([0,1,2,3]))

// version 2
// found formula through google: (n(n+1))/2

const missingNumber = function(nums) {
    const sumOfNums = nums.reduce((a, b) => a + b);
    const biggestNum = nums.length;
    const sequence = (biggestNum * (biggestNum+ 1)) / 2;
    return sequence - sumOfNums;
};

console.log(missingNumber([0,1,3])) // 6

// other solutions

const missingNumber = function(nums) {
    let sum = nums.length;
    for (let i = 0; i < nums.length; i++) {
        sum += i - nums[i];
    }

    return sum;
};
