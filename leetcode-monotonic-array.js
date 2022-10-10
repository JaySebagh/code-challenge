// https://leetcode.com/problems/monotonic-array/

// brainstorm/sudo code
// sort array ascending and descending
// check if all arrays match

const isMonotonic = function(nums){
    return(
        [...nums].sort((a, b) => a - b).join("") === nums.join("") ||
        [...nums].sort((a, b) => b - a).join("") === nums.join("")
    ) ? true : false
};

console.log(isMonotonic([1, 2, 2, 3]))
console.log(isMonotonic([6, 5, 4, 4]))
console.log(isMonotonic([1, 3, 2]))


// other solutions

const isMonotonic = function(nums){
    return(
        nums.every((v, i) => i === 0 || v <= nums[i - 1]) ||
        nums.every((v, i) => i === 0 || v >= nums[i - 1])
    );
};

//

const isMonotonic = function(nums) {
    let ascend = true, descend = true 
    
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] > nums[i + 1]) ascend = false
        if(nums[i] < nums[i + 1]) descend = false
    }
    
    return ascend || descend 
};
