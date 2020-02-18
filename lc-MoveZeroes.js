// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

let moveZeroes = function(nums) {
    // setup a 0 counter
    // loop through the array and remove all 0s while incrementing the counter
    // append 'n' 0s to the end of the array

    // len variable that will be decremented each time we relocate a 0
    let len = nums.length
    
    for(let i = 0; i < len; i++){
        // if i is 0 remove it and push it to the end of the array
        if(nums[i] === 0){
            nums.splice(i, 1);
            nums.push(0);
            // because we spliced the array, we need to go back a step to check for the new number
            i--;
            // array size has changed
            len--;
        }
    }
}

________________________________________
Other people's solutions:
// same as mine but written better
let moveZeroes = function(nums) {       
    for(let i = nums.length; i--;){
        if(nums[i] === 0){
            nums.splice(i, 1)
            nums.push(0);
        }
    }
};
________________________________________
