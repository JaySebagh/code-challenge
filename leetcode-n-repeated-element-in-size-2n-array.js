// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

// brainstorm/sudo code
// loop through the array and count the occurences
// return the key with the value equal to half the length of the array

const repeatedNTimes = function(nums) {
    let count = new Map();

    for(let num of nums) count.set(num, count.get(num) + 1 || 1)

    for(let [k, v] of count.entries()) if(v === nums.length / 2) return k
};

console.log(repeatedNTimes([5,1,5,2,5,3,5,4])) // 5


// other solutions

const repeatedNTimes = function(nums) {
  return nums.find((v, i, arr) => arr.indexOf(v) !== i)
};

//

const repeatedNTimes = function(nums) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            return nums[i];
        } else {
            map[nums[i]] = 0;
        }
    }
    
    return 0;
};

