// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// brainstorm/sudo code
// reverse loop through the array
// if the number at index is less than 9, add 1
// if the number at index is 9, set to 0, add 1 to the previous number, decrement the index, and repeat

const plusOne = function(digits, reverseIndex) {
    // check if intial function call or recursion
    if(!reverseIndex && reverseIndex !== 0) reverseIndex = digits.length - 1
    // if the value is less than 9, add 1
    if(digits[reverseIndex] < 9){
        digits[reverseIndex]++
    } else {
        // else set the current value to 0
        digits[reverseIndex] = 0
        // if the start of the array is reached, add 1 to the front and return the array
        if(reverseIndex === 0){
            digits.unshift(1)
            return digits
        }
        // recursion with reverseIndex reducing
        decrementIndex = reverseIndex - 1
        plusOne(digits, decrementIndex)
    }
    return digits
};

console.log(plusOne([7,8,8])) // [7,8,9]
console.log(plusOne([7,8,9])) // [7,9,0]
console.log(plusOne([7,9])) // [8,0]
console.log(plusOne([9,9,9])) // [1,0,0,0]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])) // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

// other solutions

const plusOne = function(digits) {
    // for loop in reverse index order
    for(var i = digits.length - 1; i >= 0; i--){
        // increment the current index value, if it's greater than 9 then replace with 0 else return the array
        if(++digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    // add 1 to the front of the array if the index is the start and return the array
    digits.unshift(1);
    return digits;
};

//

const plusOne = function(digits) {
    const fromArray = digits.join(''); // remove from array
    const toInt = BigInt(fromArray); // convert to integer (parseInt or Number can't handle large numbers)
    const addOne = toInt + 1n; // add one 
    const result =  Array.from(String(addOne), Number); // split into array and convert each instance into a number
    return result
};
