// Good morning! Implement four functions called multiply, divide, modulo, and negCheck. The first three functions should multiply, divide, or return the remainder of two arguments after invoking negCheck upon the two numbers.

// Now for the tricky part: you can only use + and - to implement these functions.
// Do not use the JavaScript operators for multiply, divide and modulo: * / %

// The negCheck function needs to indicate whether or not the resulting product, quotient and remainder would be positive or negative. Use a Boolean value to indicate this (you can use the not operator ! to toggle the Boolean value.) negCheck should return an array with that Boolean having converted num1 and num2 into positive integers.

// Hint: divide should drop the remainder.
// NOTE: the test suite will check to see if you are using the * / or % operators. This test will fail if you have commented out code within your functions.

// For example:

// console.log(negCheck(12, 34)); //   <--- [ false, 12, 34 ]
// console.log(negCheck(-12, 34)); //  <--- [ true, 12, 34 ]
// console.log(negCheck(12, -34)); //  <--- [ true, 12, 34 ]
// console.log(negCheck(-12, -34)); // <--- [ false, 12, 34 ]
// console.log(multiply(3, 4)); //     <--- 12
// console.log(multiply(-3, 4)); //    <--- -12
// console.log(multiply(3, -4)); //    <--- -12
// console.log(multiply(-3, -4)); //   <--- 12
// console.log(divide(10, 3)); //      <--- 3
// console.log(divide(-10, 3)); //     <--- -3
// console.log(divide(10, -3)); //     <--- -3
// console.log(divide(-10, -3)); //    <--- 3
// console.log(modulo(10, 3)); //      <--- 1
// console.log(modulo(-10, 3)); //     <--- -1
// console.log(modulo(10, -3)); //     <--- 1
// console.log(modulo(-10, -3)); //    <--- -1


function negCheck (num1, num2) {
  if(Math.sign(num1) === -1 || Math.sign(num2) === -1){
    return "true"
  } else {
    return "false"
  }
}

function multiply(x, y) {
  return ("i").repeat(x).repeat(y).length 
}

function divide(x, y) {
  division = 0;
  numX = x;
  numY = y;
  
  if(Math.sign(x) === -1){
    numX = Math.abs(x)
  }
  
  if(Math.sign(y) === -1){
    numY = Math.abs(y)
  }
  
  for (let i = 0; numX > numY; i++) {
    division++;
    numX = numX - numY;
  }
  
  if(Math.sign(x) === -1 && Math.sign(y) === -1){
    return division;
  } else if(Math.sign(x) === -1 || Math.sign(y) === -1) {
    return -Math.abs(division);
  } else {
    return division;
  }
}

function modulo(x, y) {
  const arr = negCheck(x, y);
  let numX = x;
  let numY = y;
  
  if(Math.sign(x) === -1){
    numX = Math.abs(x)
  }
  
  if(Math.sign(y) === -1){
    numY = Math.abs(y)
  }
  
  const arr = negCheck(x, y);
  const counter =  divide(numX, numY);

  const integer = multiply(numY, counter);

  const remainder = numX - integer

  if(Math.sign(x) === -1 || Math.sign(y) === -1){
    return -Math.abs(remainder)
  } else {
    return remainder;
  }
}
