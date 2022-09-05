// https://leetcode.com/problems/detect-capital/

// brainstorm/sudo code
// convert the word to all caps, no caps, and first letter caps with rest lower case
// check if they match the input

const detectCapitalUse = function(word) {
    const upper = word.toUpperCase()
    const lower = word.toLowerCase()
    const first = lower.charAt(0).toUpperCase() + lower.slice(1)
    return upper === word || lower === word || first === word
};

console.log(detectCapitalUse("FlaG"))

// one liner

const detectCapitalUse = function(word) {
    return word.toUpperCase() === word || word.toLowerCase() === word || word.charAt(0).toUpperCase() + word.toLowerCase().slice(1) === word
};

// other solutions

const detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};
