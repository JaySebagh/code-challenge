// Given an array nums of integers, return how many of them contain an even number of digits. 

// Input: [12,345,2,6,7896]

// Output: 2

// Explanation:
// 12 contains 2 digits (even).
// 345 contains 3 digits (odd).
// 2 contains 1 digit (odd). 
// 6 contains 1 digit (odd). 
// 7896 contains 4 digits (even). 
// Therefore only 12 and 7896 contain an even number of digits.

let findNumbers = function(nums) {
    // convert array by checking if divisible by 2
    // return amount that is divisible by 2
    
    let counter = 0;
    
    for(i in nums){
        if(nums[i].toString().length % 2 == 0) counter++
    }
    
    return counter
}

_________________________________________________________________________________

Other people's solutions:

let findNumbers = function(nums) {
    return nums.filter(num => num.toString().length % 2 == 0).length;
};
