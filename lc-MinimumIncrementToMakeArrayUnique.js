// Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

// Return the least number of moves to make every value in A unique.

let minIncrementForUnique = function(A) {
    // find matching numbers
    // increment one of them
    // if the increment matches another number, increment it again until it doesnt
    // update an increment counter
    
    // change array into frequency object?
    // look for k/v pairs that are greater than 1
    // increment the number, if that number exists increment as needed
    
    
    // just reassigning for clarity
    let nums = A
    let moves = 0;
    // obj to check for unique numbers
    let freq = {};
    
    for(let i = 0; i < nums.length; i++){
        // if the number isnt in the freq object, add it
        if(!freq[nums[i]]){
            freq[nums[i]] = 1
        } else {
            // if it exists
            // increment the number in the array
            nums[i] += 1
            // incremenet the moves
            moves++
            //re-check with the new incremented number
            i -= 1
        }
    }
    return moves
}


____________________________________________________________________________________________________________________________________

Other people's solutions:

let minIncrementForUnique = function(A) {
    let nums = A 
    let moves = 0;

    // sort from smallest to biggest
    nums.sort((a,b) => a - b);
    
    for (let i = 1; i < nums.length; i++) {
        // check if the current number is less than or equal to the previous one
        if(nums[i] <= nums[i - 1]) {
            // previous number + 1 - current number = number of moves needed for current number to be greater than previous number
            moves += nums[i - 1] + 1 - nums[i];
            // update current number which is supposed to be 1 higher than the previous
            nums[i] = nums[i-1] + 1
        }
    }
    
    return moves;
}
