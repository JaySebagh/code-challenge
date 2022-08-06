// https://leetcode.com/problems/length-of-last-word/
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// brainstorm/sudo code
// split the string
// grab the last word
// get the length of the last word

// version one
const lengthOfLastWord = function(str) {
    let split = new Map();
    const wordsArr = str.split(" ");
    let lastWordIndex;
    
    for(i in wordsArr){
        // check if the current word is not a space
        if(wordsArr[i] !== ""){
            // add the word to the map
            split.set(i, wordsArr[i]);
            // set the variable to the last inserted word's index
            lastWordIndex = i;
        };
    };

    // get the last inserted word in the map and return the length
    const lastWordLength = wordsArr[lastWordIndex].length;
    return lastWordLength;
};

console.log(lengthOfLastWord("a fsdf fasdfa   "))

// version two
// same as version one except without needing a map
const lengthOfLastWord = function(str) {
    const wordsArr = str.split(" ");
    let lastWord;
    
    for(i in wordsArr){
        if(wordsArr[i] !== ""){
            lastWord = wordsArr[i];
        };
    };

    return lastWord.length
};

console.log(lengthOfLastWord("a fsdf fasdfa   "))

// version three
// rather than looping over the array, check each array entry in reverse order
const lengthOfLastWord = function(str) {
    const wordsArr = str.split(" ");
    // create index to search the array but starting from the end
    let reverseIndex = wordsArr.length - 1

    // decrement the index until a word is found, skipping all spaces
    while(wordsArr[reverseIndex] === "") reverseIndex--

    // return the length of the first word found
    return wordsArr[reverseIndex].length
};

console.log(lengthOfLastWord("a fsdf  fasdfa   "))

// other solutions
const lengthOfLastWord = function(str) {
    return str.trim().split(" ").pop().length;
};
