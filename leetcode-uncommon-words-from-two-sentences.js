// https://leetcode.com/problems/uncommon-words-from-two-sentences/

// brainstorm/sudo code
// add both strings to a map
// return values of count 1

const uncommonFromSentences = function(s1, s2) {
    let words = new Map(), uncommon = [];
    // combine both strings into an array and add a count of each word occurence to the Map
    for(let word of ((s1 + " " + s2).split(" "))) words.set(word, words.get(word) + 1 || 1);
    // push all unique words to uncommon array
    for(let [key, value] of words.entries()) if(value === 1) uncommon.push(key);
    // return unique words array
    return uncommon
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")) // ["sweet","sour"]
console.log(uncommonFromSentences("apple apple", "banana")) // ["banana"]



// other solutions

// one liner
const uncommonFromSentences = (s1, s2) => {
  `${s1} ${s2}`.split(' ').filter((word, i, arr) => arr.indexOf(word) === arr.lastIndexOf(word));
}

// using set
const uncommonFromSentences = function(s1, s2) {
    const wordSet = new Set();
    const removed = new Set();
    const combined = `${s1} ${s2}`.split(" ");
    
    for(let word of combined) {
        if(wordSet.has(word) || removed.has(word)){
            wordSet.delete(word);
            removed.add(word);
        } else {
            wordSet.add(word);
        }
    }
    return [...wordSet];
};
