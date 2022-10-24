// https://leetcode.com/problems/squares-of-a-sorted-array/

// brainstorm/sudo code
// square each number
// sort

const sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++) nums[i] = nums[i] * nums[i]
    return nums.sort((a, b) => a - b)
};

console.log(sortedSquares([-4,-1,0,3,10]))


// other solutions

const sortedSquares = function(nums) {
    let result = [], left = 0, right = nums.length - 1, prev = right;

    while(left <= right){
        if(nums[light] ** 2 > nums[right] ** 2){
            result[prev--] = nums[left++] ** 2;
        } else {
            result[prev--] = nums[right--] ** 2;
        }
    }
    
    return result;
};

//

const sortedSquares = function(nums) {
    const result = new Array(nums.length);
    let left = 0, right = nums.length - 1;
    
    for(let i = nums.length - 1; i >= 0; i--){
        if(Math.abs(nums[left]) < Math.abs(nums[right])){
            result[i] = nums[right] ** 2
            right--;
        } else {
            result[i] = nums[left] ** 2
            left++;
        }
    }
    
    return result;
};
