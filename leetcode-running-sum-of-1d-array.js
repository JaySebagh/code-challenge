// https://leetcode.com/problems/running-sum-of-1d-array/

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

var runningSum = function(nums) {
    // loop through array and replace each index with the sum of the previous number
    // index starts at 1 since the 0th index does not/cannot be modified
    for(let i = 1; i < nums.length; i++){
        nums[i] = nums[i] + nums[i-1]
    }
    
    return nums
};

// other solutions
const runningSum = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}

// a: accumulator
// c: current value
// i: index
// arr: source array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const runningSum = ((nums, val = 0) => nums.map(x => val = val + x))

//

var runningSum = function(nums) {
    let sum = 0
    for (let i in nums) {
        sum += nums[i]        
        nums[i] = sum
    }
    return nums
};
