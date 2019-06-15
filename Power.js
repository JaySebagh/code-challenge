// Write a function that returns true if k^k == n for input (n, k).

// Examples
// kToK(4, 2) ➞ true
// kToK(387420489, 9) ➞ true # 9^9 == 387420489
// kToK(3124, 5) ➞ false
// kToK(17, 3) ➞ false

function kToK(n, k) {
    // if else statement that returns true or false
    if(n === Math.pow(k, k)){
      return true
    } else {
      return false
    }
    // calculate k to the power of k
    // check if it's equal to n -> return true else false
  }
  
  const answer = kToK(387420489, 9);
  console.log(answer);