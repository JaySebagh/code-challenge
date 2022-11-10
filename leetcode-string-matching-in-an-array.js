// https://leetcode.com/problems/string-matching-in-an-array/

// brainstorm/sudo code
// loop and check each word with the word at the index
// check substring both ways to avoid double for loop

const stringMatching = (words) => {
    const match = new Set();
    let count = 1;
    
    for(let i = 0; i < words.length; i++){
        for(let j = count; j < words.length; j++){
            if(words[i].includes(words[j])) match.add(words[j]);
            if(words[j].includes(words[i])) match.add(words[i]);
        };
        count++;
    };
    return Array.from(match);
};

console.log(stringMatching(["mass","as","hero","superhero"])) // ["as","hero"]
console.log(stringMatching(["leetcode","et","code"])) // ["et","code"]
console.log(stringMatching(["blue","green","bu"])) // []


// other solutions

const stringMatching = (words) => {
    words.filter(word => words.some(element => element !== word && element.includes(word)));
}

//

const stringMatching = (words) => {
    let res = [];
    
    for(let word of words) if(words.filter(w => w.includes(word)).length > 1) res.push(word);
    
    return res;
}
