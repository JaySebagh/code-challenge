// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/

// brainstorm/sudo code
// loop through the array
// create a counter and increment every 0
// if number is 1, check if counter is equal or greater than min places away required

const kLengthApart = (nums, min) => {
    let counter = 0, firstOne = false;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0) counter++
        if(nums[i] === 1 && !firstOne){
            firstOne = true;
            counter = 0;
        } else if(nums[i] === 1 && counter >= min){
            counter = 0
        } else if(nums[i] === 1 && counter < min){
            return false
        }
    }
    
    return true
};

console.log(kLengthApart([1,0,0,0,1,0,0,1], 2)) // true
console.log(kLengthApart([1,0,0,1,0,1], 2)) // false



// other solutions

const kLengthApart = (nums, k) => {
  let curr = k;
    
  for(const num of nums){
    if(num === 0) {++curr; continue;}
    if(curr < k) return false;
    curr = 0;
  }
    
  return true;
};
