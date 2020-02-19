// Given a binary array, find the maximum number of consecutive 1s in this array.

let findMaxConsecutiveOnes = function(nums) {
    // split the array
    // return longest one
    
    return nums.join('').split('0').sort((a, b) => b.length - a.length)[0].length
};

________________________________________________________________________________
Other people's solutions:
let findMaxConsecutiveOnes = function(nums) {
    return Math.max(...nums.join('').split('0').map(ones => ones.length));
};
________________________________________________________________________________
