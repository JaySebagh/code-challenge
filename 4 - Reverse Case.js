// Write a function that takes in a string, reverses the 'casing' of that string, and returns the "reversed-casing" string.

// const string = 'HELLO world!';
// console.log(reverseCase(string)); // <--- hello WORLD!

function reverseCase(str) {
    // Let strCase be an empty string
    let strCase = '';
    // For loop based off the length of the string provided
    for (let i = 0; i < str.length; i++) {
    // check if the letter is uppercase
      if (str[i] === str[i].toUpperCase()) {
    // If the letter is uppercase, convert it to lowercase and push it to strCase.
        strCase += str[i].toLowerCase();
      } else {
    // If the letter is lowercase, convert it to uppercase and push it to strCase.
        strCase += str[i].toUpperCase();
      }
    }
    return strCase;
}
  
const answer = reverseCase("HELLO world!")
  
console.log(answer)
