// https://leetcode.com/problems/keyboard-row/

// brainstorm/sudo code
// create three sets for each row
// check each letter of each word
// find what set the first letter is
// continue and see if any of the letters are missing

const search = function(word){
    let letters = new Map([
        ["q", 1], ["w", 1], ["e", 1], ["r", 1], ["t", 1], ["y", 1], ["u", 1], ["i", 1], ["o", 1], ["p", 1],
        ["a", 2], ["s", 2], ["d", 2], ["f", 2], ["g", 2], ["h", 2], ["j", 2], ["k", 2], ["l", 2],
        ["z", 3], ["x", 3], ["c", 3], ["v", 3], ["b", 3], ["n", 3], ["m", 3],
    ])
    let row = letters.get(word.charAt(0));

    for(i in word){
        if(letters.get(word.charAt(i)) !== row) return false
    }
    return true
}

const findWords = function(words) {
    const match = []
    for(let word of words){
        const found = search(word.toLowerCase());
        if(found === true) match.push(word);
    }
    return match
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])) // ["Alaska","Dad"]
console.log(findWords(["omk"])) // []
console.log(findWords(["adsdf","sfd"])) // ["adsdf","sfd"]

// other solutions

const findWords = function(words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");

    const res = [];
    
    for (const word of words) {
        if (canBeTyped(word, row1) || canBeTyped(word, row2) || canBeTyped(word, row3)) res.push(word);
    }
    
    return res;
    
    function canBeTyped(word, row) {
       for (const char of word) {
           if (!row.has(char.toLowerCase())) return false;
       }
       return true;
    }
};

// 

const findWords = function(words) {
    return words.filter(word => /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i.test(word));
};

//

const findWords = function(words) {
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    
    return words.filter(word => rows.some(row => [...word.toLowerCase()].every(char => row.includes(char))))
};
