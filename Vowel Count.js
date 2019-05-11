// Write a function which counts the number of vowels in a given string. Return the count number.

// Passing the string "Hello world!" as an argument to your vowelCount() function would result in the number 3 being returned.

// For the purposes of this exercise, we are not considering "y" as a vowel.

function vowelCount(str) {
    // convert str to lowercase
    let strCaps = str.toLowerCase()
    // empty array
    let vowels = []
    // loop over the lowercase str based off length
    for(let i = 0; i < strCaps.length; i++){
    // check if it's a vowel
      if(strCaps[i] === "a" || strCaps[i] === "e" || strCaps[i] === "i" || strCaps[i] === "o" || strCaps[i] === "u"){
    // if it's a vowel, push it to the array
        vowels += strCaps[i];
      }
    }
    // return the length of the array
    return vowels.length
  }
  
  const answer = vowelCount('Hello world!');
  console.log(answer);