// Write a function which takes a positive integer number as an argument and returns
// it's "Collatz chain". The Collatz chain will stop at one.

// Named after Lothar Collatz, the "Collatz conjecture" defines a sequence of numbers.
// That sequence is the Collatz "chain". Starting with a positive integer,
// the Collatz conjecture determines the next integer in the chain until the number 1 is obtained.

// Your Collatz algorithm will evaluate the integer and then,
// depending on the condition of the integer, perform the following tasks:

// If the integer is even, then halve the number.
// If the integer is not even, then multiply it by 3 and add one.

// An example chain starting from the number 23 looks like this:

// [23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]

// Boldface signifies the odd numbers

// Your function should behave like this:

// console.log(collatzSequence(23));
// [ 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1 ]

function collatzSequence(n) {
// let currentNum be equal to the number passed in
    let currentNum = n;
// let csArr be an array that starts with the number passed in
    let csArr = [n]
// for loop as long as currentNum is greater than 1
    for(let i = 0; currentNum > 1; i++){
// check if currentNum is even
      if(currentNum%2 === 0) {
// if currentNum is even, divide it by 2
        currentNum = currentNum/2
// and push currentNum to csArr array
        csArr.push(currentNum)
      } else {
// if currentNum is odd, multiply it by 3 and add 1
        currentNum = currentNum*3+1
// and push currentNum to csArr
        csArr.push(currentNum)
      }
    }
// return csArr array once finished
    return csArr;
}
  
  const answer = collatzSequence(23);
  console.log(answer);