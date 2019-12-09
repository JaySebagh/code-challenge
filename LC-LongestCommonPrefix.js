// https://leetcode.com/problems/merge-two-sorted-lists/
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function(strs) {
    // loop over each word in the array
    // for each word, check if the letter is the same
        // if it is the same, append it to a variable
        // if it is not the same, return the variable
    
    // make sure we have an input
    if(strs.length === 0){
        return ""
    }
  
    // store the first word and split it
    const firstWord = strs[0].split("");
    // variable to hold all matching prefix letters for each word
    let prefixArr = []
    // split each word
    strs.forEach(word => {
        const wordArr = word.split("");
        // variable to hold the matching letters
        let matching = "";
        // loop over each letter
        for(let i = 0; i < firstWord.length; i++){
            // if both letters match, add it to matching. (go through in order)
            if(wordArr[i] === firstWord[i]){
                matching += firstWord[i];
            // if the letters don't match, break (because we want only the prefix, not all matching letters)
            } else {
                break;
            }
        }
        // push the prefix we found for the word to an array
        prefixArr.push(matching)
    });
    // here we are going to return the shortest prefix, since all the words have them in common.
    // the value of the variable below is temporary so we can compare all the prefixes
    let shortestPrefix = prefixArr[0];
    
    prefixArr.forEach(prefix => {
        // if the prefix is shorter than the current prefix, replace it
        if(prefix.length < shortestPrefix.length){
            shortestPrefix = prefix
        }
    });
    
    // return the prefix found in every word
    return shortestPrefix;
};

// ----------------- visual brainstorming ------------------
                 
//                  flower (first word)
                 
                 
//                  flow     4 - flow
//                  flight   2 - fl
// ---------------------------------------------------------
