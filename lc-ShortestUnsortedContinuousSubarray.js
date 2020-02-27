// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order,
// then the whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

let findUnsortedSubarray = function(nums) {
    // realized that bubble sort isn't the best method since I would have to iterate multiple times until conditions are met
    
    // currently non functional
    
    
    // bubble sort
    // if right < current swap
    
    let startIndex = 0;
    let endIndex = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[i + 1]){
            if(startIndex === 0){
                startIndex = i
            }
            endIndex = i + 2
            let temp = parseInt(nums.slice(i, i + 1).join())
            nums[i] = nums[i + 1];
            nums[i + 1] = temp
        }
    }
    
    console.log(nums, startIndex, endIndex)
}
