// https://leetcode.com/problems/rotate-string/

// brainstorm/sudocode
// loop through str length
// remove first letter in str and add it to the end
// check if str === goal

const rotateString = function(str, goal) {
    for (let i = 0; i < str.length - 1; i++) {
        str = (str + str.charAt(0)).slice(1)
        if (str === goal) return true
    }
    return false
};

console.log(rotateString("apple", "banana")) // false
console.log(rotateString("apple", "pleap")) // true

// other solutions

const rotateString = function(str, goal) {
    return (goal + goal).indexOf(str) != -1 && str.length == goal.length
};

//

const rotateString = function(str, goal) {
    for(let i = 0; i < str.length; i++){
        if(str.slice(i) + str.slice(0, i) === goal) return true;
    }
    return goal.length ? false : true;
};
