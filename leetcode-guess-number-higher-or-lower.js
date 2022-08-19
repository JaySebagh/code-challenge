// https://leetcode.com/problems/guess-number-higher-or-lower/

// // brainstorm/sudo code
// // create a map
// // loop through magazine and add each letter to the map as a key with value as the occurence count
// // loop through ransomNote and for each letter check if it exists in the map
// if it doesnt return false
// if it does subtract 1 from the value
// if the value is 0 return false
// if it reaches the end return true

const canConstruct = function(ransomNote, magazine) {
    const magazineLetters = new Map()
    for(letter of magazine){
        magazineLetters.set(letter, magazineLetters.get(letter) + 1 || 1)
    }
    for(letter of ransomNote){
        if(magazineLetters.get(letter) > 0){
            magazineLetters.set(letter, magazineLetters.get(letter) - 1)
        } else {
            return false
        }
    }
    return true
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("test", "example")) // false
console.log(canConstruct("aa", "a")); // false

// other solutions


const canConstruct = function(ransomNote, magazine) {
    const map = {};
    for(letter of magazine) map[letter] ? map[letter]++ : map[letter]=1

    for(letter of ransomNote) {
        if(!map[letter]){
            return false
        } else {
            map[letter]--
        }
    }
    return true;
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("test", "example")) // false
console.log(canConstruct("aa", "a")); // false
