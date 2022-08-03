//  Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

// Initial brainstorm:
    // convert the strings into arrays
    // loop through second string with the index condition being the lenth of the first string
    // continue looping through the second string until the letter at the index of the first string is found
    // if it is found, move onto the next index of the first string
    // if the index reaches the end of the first string, return true else false
    
    // const first = firstString.split("")
    // const second = secondString.split("")

// revision brainstorm
    // use .charAt() instead of converting strings into arrays
    // use a counter to loop through the first string
    // at the end of the for loop on the second string, if the counter length is the same as the length of the first string, return true else false

const isSubsequence = function(first, second) {
    // set a counter to keep track of first string index
    let counter = 0
    
    // loop through second string
    for(let i = 0; i < second.length; i++){
        // if the letter in the first string matches the letter in the second string, increment the index of the first string counter
        if(second.charAt(i) === first.charAt(counter)) counter++
    }
    
    // if all letters were found in order, the length of the counter would match the length of the first string
    return counter === first.length
};

// other solutions

const isSubsequence = function(first, second) {
    let i = 0, j = 0;
    while( j < second.length) {
        if(first[i] === second[j]) {
            i++;
        }
        j++;        
    }
    return i === first.length
};
