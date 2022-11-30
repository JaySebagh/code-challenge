// https://leetcode.com/problems/remove-element/

// brainstorm/sudo code
// 

// leetcode is bugged, returning blank instead of values.
const removeElement = (nums, val) => {
    let traverse = nums.length
    for(let i = 0; i < traverse; i++){
        if(nums[i] === val){
            nums.splice(i, 1)
            i--
            traverse--;
        }
    }
    return nums
};

console.log(removeElement([3,2,2,3], 3)) // [2,2]
console.log(removeElement([0,1,2,2,3,0,4,2], 2)) // [0,1,4,0,3]


// other solutions

// two pointers

const removeElement = function(nums, val) {
    let left = 0, right = nums.length - 1;
    
    while(left <= right){
        if(nums[left] === val){
            nums[left] = nums[right];
            right--;
        }
        else {
            left++;
        }
    }
    
    return left;
};

//

const removeElement = function(nums, val) {
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

//

const removeElement = function(nums, val) {
  let i = 0;
    
  for(let j = 0; j < nums.length; j++){
    if(nums[j] !== val){
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
