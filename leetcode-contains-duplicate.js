// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// brainstorm/sudo code
// create a map
// go through the input array
// for each integer in the array, add the integer as a key in the map
// check if the key exists in the map already
// if it does return true else false

const containsDuplicate = function(nums) {
    const numsMap = new Map();

    for (i in nums){
        if(!numsMap.has(nums[i])){
            numsMap.set(nums[i], '')
        } else {
            return true
        }
    }
    return false
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))

// alternative method: use 'set'
