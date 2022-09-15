// https://leetcode.com/problems/find-pivot-index/

// brainstorm/sudo code
// loop through the array
// reduce left and right side
// if left and right are equal, return the index + 1
// else return -1

// very poor time/space complexity but functions
const pivotIndex = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let left = nums.slice(0, i);
        left.length === 0 ? left = 0 : left = left.reduce((a, b) => a + b);
        let right = nums.slice(i + 1);
        right.length === 0 ? right = 0 : right = right.reduce((a, b) => a + b);
        if(left === right) return i;
    };
    return -1;
};

// using Queue greatly increased time/space complexity
const pivotIndex = function(nums) {
    let left = 0, right = nums.reduce((a, b) => a + b), counter = 0;
    
    for(let i = 0; i < nums.length; i++){
        const shift = nums.shift();
        i--;
        right -= shift;
        if(left === right) return counter;
        counter++;
        left += shift;
    };
    
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6])); // 3
console.log(pivotIndex([1,2,3])); // -1
console.log(pivotIndex([2,1,-1])); // 0

// other solutions

const pivotIndex = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    let left = 0;
    for(let i = 0; i < nums.length; i++){
        const right = sum - left - nums[i];
        if(left === right) return i;
        left += nums[i];
    }
    return -1;
}

//

const pivotIndex = function(nums) {
    let sum = nums.reduce((a,b) => a + b, 0);
    let left = 0, right = sum;
    for(let i = 0, i < nums.length; i++){
        right -= nums[i];
    	if(left === right) return i;
    	left += nums[i];
    }
    return -1;
};
