// Take in a number and return an array counting down to zero.

// Example
// countdown(3) ➞ [3, 2, 1, 0]
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
// countdown(10) ➞ [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

function countdown(start) {
  let countArr = []
  for(let i = 0; start >= 0; i ++){
    countArr.push(start)
    start--
  }
  return countArr
}

const answer = countdown(3);
console.log(answer);