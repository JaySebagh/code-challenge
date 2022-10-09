// https://leetcode.com/problems/buddy-strings/

// brainstorm/sudo code
// if both strings are not same length return false
// if both strings do not have same characters and count return false
// loop through str and check if the letter at the position matches the letter at the position of goal
// if it does not, check for swap

// fails "ab", "ab"
const buddyStrings = (str, goal) => {
    if(new Set(str, goal).size === 1) return true
    
    if(str.length !== goal.length || str.split('').sort().join('') !== goal.split('').sort().join('')) return false;

    let diff = []

    for(let i = 0; i < str.length; i++) if(str[i] !== goal[i]) diff.push(str[i], goal[i])

    if(diff.length > 4 || (diff[0] !== diff[3] && diff[1] !== diff[2])) return false

    return true
}

console.log(buddyStrings("aa", "aa")) // true
console.log(buddyStrings("unique", "unieuq")) // true
console.log(buddyStrings("unique", "enqiuu")) // false
console.log(buddyStrings("ab", "ab")) // false
console.log(buddyStrings("test", "etts")) // false

// other solutions

const buddyStrings = function(str, goal) {
    if(str.length != goal.length) return false;
    
    const diff = [];
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] != goal[i]) diff.push(i);
        if(diff.length > 2) return false;
    }
    
    if(!diff.length) return str.length != [...new Set(str)].length;
    
    const [i, j] = diff; 
    
    return str[i] == goal[j] && goal[i] == str[j];
};
