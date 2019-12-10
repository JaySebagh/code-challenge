// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

var topKFrequent = function(nums, k) {
    // loop through array
    // if number doesnt exist, add it to object as key
    // if number exists, increment it's value
    // check the most frequent elements in the object
    
    
    // object variable to count frequencies where the key is the number and the value is the frequency
    let freqObj = {}
    
    // forEach number in the array, check if the number already exists in the object. If it does, increment by 1. If it doesn't, add it.
    nums.forEach(value => {
        if(value in freqObj){
            freqObj[value] += 1
        } else {
            freqObj[value] = 1            
        }
    })
    
    // pull the keys from the object
    let keys = Object.keys(freqObj);
    
    // sort the keys from greatest frequency
    keys.sort(function(a, b) {
        return freqObj[b] - freqObj[a]
    });
    
    // return the most frequent keys by slicing them from the array using the input k
    return keys.slice(0, k)
};
