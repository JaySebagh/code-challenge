// https://leetcode.com/problems/word-pattern/submissions/

// brainstorm/sudo code
// loop through string
// add each word and add it to a Map along with the letter pattern
// if it already exists, check if it has the same key value
// if it does, skip it
// if it doesn't return false

// edge cases
// there aren't equal amounts of letters in pattern as there are words in phrase

// fails last test case
const wordPattern = function(pattern, phrase) {
    const words = phrase.split(" ");
    const tracker = new Map();
    if(words.length !== pattern.length) return false
    for(i in words){
        if(tracker.has(pattern.charAt(i))){
            const trackerValue = tracker.get(pattern[i]);
            if(trackerValue !== words[i]) return false
        } else if(tracker.has(words[i])) {
            return false
        } else {
            tracker.set(pattern[i], words[i]).set(words[i], words[i]);
        }
    }
    return true
};

console.log(wordPattern("abb", "dog cat cat dog")); // false
console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("aaaa", "dog cat cat dog")); // false
console.log(wordPattern("abba", "dog dog dog dog")); // false
console.log(wordPattern("abc", "b c a")); // false

// other solutions

const wordPattern = function(pattern, str) {
    const words = str.split(/\s+/);
    const map = new Map();
    
    if(words.length !== pattern.length) return false;
    if(new Set(words).size !== new Set(pattern).size) return false;
    
    for(let i = 0; i < pattern.length; i++) {
        if(map.has(pattern[i]) && 
           map.get(pattern[i]) !== words[i]) return false;
        map.set(pattern[i], words[i]);
    }
    return true;
};

//

const wordPattern = function(pattern, s) {
    s = s.split(' ')
    if (pattern.length !== s.length) return false
    const m = new Map()
    const n = new Map()
    for(let i=0; i<pattern.length; i++){  
        if(!m.has(pattern[i])) m.set(pattern[i], s[i])
        else if(m.get(pattern[i]) !== s[i]) return false
        if(!n.has(s[i])) n.set(s[i], pattern[i])
        else if(n.get(s[i]) !== pattern[i]) return false
    }
    return true
}

//

const wordPattern = function(pattern, str) {
    str = str.split(' ');
    pattern = pattern.split('');

    if(str.length !== pattern.length) return false;
    if(new Set(str).size !== new Set(pattern).size) return false;

    let obj = {};
    pattern.forEach((p, i) => {
        obj[p] = str[i];
    });
    
    return pattern.map(p => obj[p]).join(' ') === str.join(' ')   
};

//

const wordPattern = function(pattern, s) {
    const arrayString = s.split(' ');
    const hashMapPattern = {};
    const hashMapString = {};

    if (pattern.length !== arrayString.length) return false;
    
    for (let i = 0; i < arrayString.length; i++) {
        if (!hashMapPattern[pattern[i]] && !hashMapString[arrayString[i]]) {
            hashMapPattern[pattern[i]] = arrayString[i];
        }
        if (!hashMapString[arrayString[i]]) {
            hashMapString[arrayString[i]] = pattern[i];
        }
        
        if (hashMapPattern[pattern[i]] !== arrayString[i]) return false;
    }
    
    return true;
};
