// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/

// initial brainstorm
  // prioritize largest negative numbers
  // if no negative numbers and 'k' times is even, choose any
  // if no negative numbers and 'k' is odd, choose the smallest positive number
  // sum the array
  
// revised brainstorm  
  // if the array is length 1 and the number is 0 return 0
  // sort the array from negative to positive
  // while there are negatives, continue changing elements in order 'k' times
  // if there are no negatives, choose the smallest positive element and repeat remaining 'k' times

// issues that arrised
  // [-8,3,-5,-3,-5,-2], 6 returned 20 instead of 22
  // the sorted array became [ -8, -5, -5, -3, -2, 3 ]
  // because all negatives became positive, the smallest number is 2 not 3
  // 8+5+5+3+2-3 = 20
  // 8+5+5+3-2+3 = 22

var largestSumAfterKNegations = function(nums, k) {
  if(nums.length === 1 && nums[0] === 0) return 0
  
  let sortedNums = nums.sort(function(a, b){
    return a - b;
  })

  let remainingK = 0;

  for(let i = 0; i < k; i++){
    if(Math.sign(sortedNums[i]) === -1){
      sortedNums[i] = Math.abs(sortedNums[i]);
    } else {
      remainingK = k - i;
      break;
    }
  }

  let sortedPositiveNums = sortedNums.sort(function(a, b){
    return a - b;
  })

  const isOdd = remainingK % 2
  if(isOdd === 1){
    sortedPositiveNums[0] = -Math.abs(sortedNums[0]);
  }

  const sumSortedPositiveNums = sortedPositiveNums.reduce((a, b) => a + b, 0)
  return sumSortedPositiveNums;
};

console.log(largestSumAfterKNegations([ -8, -5, -5, -3, -2, 3 ], 6)) // 22
console.log(largestSumAfterKNegations([-4, -3, 0, 2, 10], 3)) // 19
console.log(largestSumAfterKNegations([4,2,3], 1)) // 5
console.log(largestSumAfterKNegations([3,-1,0,2], 3)) // 6
console.log(largestSumAfterKNegations([2,-3,-1,5,-4], 2)) // 13
