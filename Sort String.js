// Write a function called sortString that takes a string of letters and returns a string with the letters sorted in alphabetical order.

// Input:
// 'dcba'
// 'zycxbwa'
// 'AzycxbCwBaA'

// Expected Output:
// 'abcd'
// 'abcwxyz'
// 'AABCabcwxyz'

function sortString(str) {
    // take the string and split it into an array
    // sort the array
    // take the array and join it into a string
    return str.split("").sort().join("")
}
  
const answer = sortString('dcba')
console.log(answer)
