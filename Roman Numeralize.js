// Define a function that takes in a positive integer and returns the
// Roman Numeral representation of that number. 

function romanNumeralize(n) {
// empty string to hold the converted value
  let converted = '';
// array holding all of the integer values
  let number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// array holding all of the roman values
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
// for loop based off the length of the number array
  for (let i = 0; i < number.length; i++) {
// check if the number provided is larger or equal to the number in the number array
    while (n >= number[i]) {
// add the roman letter to the string
      converted += roman[i];
// subtract the number value from the number provided
      n -= number[i];
    }
  }
  return converted;
}

const answer = romanNumeralize(1973);
console.log(answer)