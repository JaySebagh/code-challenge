// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be
// anagrams of each other if the first string's letters can be rearranged to form the second string. In other
// words, both strings must contain the same exact letters in the same exact frequency For
// example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the
// minimum number of character deletions required to make the two strings anagrams. Can you help her find
// this number?

// Given two strings, a and b , that may or may not be of the same length, determine the minimum number of
// character deletions required to make a and b anagrams. Any characters can be deleted from either of the
// strings.
// For example, if a = cde and b = dcf , we can delete e from string a and f from string b so that both
// remaining strings are cd and dc , which are anagrams.

// Function Description
// Complete the makeAnagram function in the editor below. It must return an integer representing the
// minimum total characters that must be deleted to make the strings anagrams.

// makeAnagram has the following parameters:
// a: a string
// b: a string

// Input Format
// The first line contains a single string, a .
// The second line contains a single string, b .

// Output Format
// Print a single integer denoting the number of characters you must delete to make the two strings anagrams
// of each other. 

// Sample Input:
//   cde
//   abc

// Sample Output:
//   4
  
//   Explanation
// We delete the following characters from our two strings to turn them into anagrams of each other:
// 1. Remove d and e from cde to get c .
// 2. Remove a and b from abc to get c .
// We must delete 4 characters to make strings anagrams, so our function should return the integer 4. 

/*
 * Complete the 'makeAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 * 1. STRING a
 * 2. STRING b
 */


function makeAnagrams(a b) {
  // take the two strings and sort them
  // maybe use set method in order to find whats in common, whatever is
  //left is what we need to delete
  // return the sum of whatever is left
  let aArr = a.split("")
  let bArr = b.split("")
  // let notCommon = aArr.filter(letter =>
  !bArr.includes(letter)).concat(bArr.filter(letter =>
  !aArr.includes(letter)));
  // return notCommon.length
  for(let i = 0; i < aArr.length; i++){
   if(bArr.includes(aArr[i])){
     let index = bArr.indexOf(aArr[i]);
     aArr.splice(i, 1);
     bArr.splice(index, 1)
     i -= 1
   }
  }
  let arrSum = aArr.length + bArr.length
  return arrSum
}
