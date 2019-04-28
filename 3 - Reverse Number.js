// Write a function called reverseNumber that reverses a number.

// Input Example: 
// 12345
// 555

// Output Example:  
// 54321
// 555

function reverseNumber(num) {
    // convert the number to a string
    let convert = num.toString()
    // reverse the string using the same method used in Code Challenge 2 - Reverse String
    const rev = convert.split("").reverse().join("")
    // convert the string back into a number
    convert = parseInt(rev)
    return convert
}
  
const answer = reverseNumber(12345);
  
console.log(answer)