// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once

// brainstorm/sudo code
// sort both strings alphabetically
// check if both strings are the same
// if they are return true else false

const isAnagram = function(first, second) {
    const sortFirst = first.split("").sort().join("");
    const sortSecond = second.split("").sort().join("");
    return sortFirst === sortSecond;
};

console.log(isAnagram("anagram", "nagaram"))


// use map instead for faster access
