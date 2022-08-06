// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// need to review big O notation

const searchInsert = function(nums, target) { 
    for(i in nums){
        if(nums[i] === target || nums[i] > target) return i
    }
    return nums.length
};

console.log(searchInsert([1,3,5,6], 7))

// other solutions

const searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        
        if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid -1;
        }   
    }
    return start;
};
