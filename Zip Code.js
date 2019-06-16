// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code.
// Examples

// isValid("59001") ➞ true

// isValid("853a7") ➞ false

// isValid("732 32") ➞ false

// isValid("393939") ➞ false

function isValid(zip) {
  const newZip = parseInt(zip).toString()
  console.log(newZip)
  if(newZip.length !== 5 || zip.length !== 5) {
    return false
  } else {
    return true
  }
}

const answer = console.log("12345");
console.log(answer);