Create a function "majority" that accepts an array and a callback. The callback will take a parameter and will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

function majority(inputArray, callback) {
  trueCount = 0;
  falseCount = 0;

  function checkMajority(num, check){
    return check(num)
  }

  for(i in inputArray){
    const isGreater = checkMajority(inputArray[i], callback)
    isGreater ? trueCount++ : falseCount++
  }

  return trueCount > falseCount ? true : false
}

// testing setup
const input = [2, 3, 19, 13, 1, 55];


console.log(majority(input, elem => elem > 2)); // true
console.log(majority(input, elem => elem > 10)); // false
console.log(majority(input, elem => elem > 50)); // false
