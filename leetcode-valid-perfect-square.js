// https://leetcode.com/problems/valid-perfect-square/

// brainstorm/sudo code
// create a loop
// multiply index by index
// if it equals num return ture
// if it's greater than num return false
// else return false
// edge case num is 1 return true

const isPerfectSquare = function(num) {
    if(num === 1) return true
    for(let i = 0; i < num; i++){
        if(i*i === num) return true
        if(i*i > num) return false
    }
    return false
};

console.log(isPerfectSquare(1))

// other solutions

// ** is exponential
const isPerfectSquare = function(num) {
    return Number.isInteger(num ** 0.5);
};

//

const isPerfectSquare = function(num) {
  let count = 1;
  
  while (num > 0) { 
    num -= count;
    if (num === 0) return true;
    count += 2;
  }
  
  return false;
};

//

const isPerfectSquare = function(num) {
    var sum = 0;
    for(let i = 1; i <= num; i += 2){
        sum += i;
        if(sum === num){
            return true;
        }
    }
    return false;
};

//

const isPerfectSquare = function(num) {
    if (num < 2) {
      return true;
    }
  
    let left = 0, right = num, guessSquared;
    while (left <= right) {
      const mid = Math.floor((right + left)/2);
      guessSquared = mid * mid;
      if (guessSquared == num) {
        return true;
      }
      if (guessSquared > num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
};
