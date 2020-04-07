// Given an array of integers that is already sorted in ascending order,
// find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target,
// where index1 must be less than index2.

const twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
        console.log(i)
        if(numbers.includes(target - numbers[i])){
            return [i + 1, numbers.indexOf(target - numbers[i], i+1) + 1]
        }
    }
};

________________________________________________________________
Other People's Solutions:
________________________________________________________________
const twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
        let j = numbers.indexOf(target - numbers[i], i + 1);
        if (j !== -1) return [i + 1, j + 1];
    }    
};
________________________________________________________________
