// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

const singleNumber = function(nums) {
    // frequency count object
    let freqCount = {}
    // if number is in object, increment it, else add it
    for(i in nums){
        freqCount[nums[i]] ? freqCount[nums[i]]++ : freqCount[nums[i]] = 1
    }
    // find number in object with frequency count of 1
    return Object.keys(freqCount).find(key => freqCount[key] === 1)
};

______________________________________________________________
Other people's solutions:
______________________________________________________________
const singleNumber = function(nums) {
    return nums.reduce((a,b) => a^b);
}
______________________________________________________________
// time O(n)
// space O(1)
function singleNumber(nums) {
  let num = 0;
  for (let n of nums) {
    num ^= n;
  }
  return num;
}
______________________________________________________________
