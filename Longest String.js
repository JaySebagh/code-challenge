// Write a function that takes an array of strings and return the longest string in the array.

// For example:
// const strings1 = ['short', 'really, really long!', 'medium'];
// console.log(longestString(strings1)); // <--- 'really, really long!'

function longestString(arr) {
    // Create empty array.
    let lengthArr = [];
    // For loop based off the length of the array given.
    for( i = 0; i < arr.length; i++  ) {
    // For each item in the array, count the length and push it to lengthArr.
      lengthArr.push(arr[i].length);
    }
    // Find the biggest number in lengthArr.
    let biggest = Math.max(...lengthArr);
    // For loop based off the length of the array given.
    for( i = 0; i < arr.length; i++  ) {
    // If the length of the item in the array given is the same as the biggest number in lengthArr, return that item.
      if(arr[i].length === biggest) {
        return arr[i]
      }
    }
  }
  
const answer = longestString(['short', 'really, really long!', 'medium'])
  
console.log(answer)