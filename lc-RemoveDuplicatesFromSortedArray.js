// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

let removeDuplicates = function(nums) {
  // iterate through the nums array
  // check if the current number is the same as the next number
  // if it is delete it
  
  
  // loop over the nums array (-1 so we don't try to check undefined)
  for(let i = 0; i < nums.length - 1; i++){
      // check if the current number is the same as the next number
      if(nums[i] === nums[i + 1]){
          // remove the current number
          nums.splice(i, 1)
          // decrement the index to check again
          i--
      }
}
