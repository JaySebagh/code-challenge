// NOTE: test case "{[]}" fails when submitting but succeeds when running in console or different sandbox.


// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// brainstorm
// create an object containing the corresponding bracket notations
// parse through the string
// check if the next bracket in the string is the closing notation of the current bracket
// will have to account for nested brackets

// initial version without nested brackets
const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
}

const isValid = function(str) {
    // loop over the input
    for(let i = 0; i < str.length; i++){
        // if the next bracket does not match the closing bracket of the current bracket, return false
        if(str[i + 1] !== brackets[str[i]]){
            return false
        } else {
            // if they match, skip the next index
            i++
        }
    }
    // if the end of the input is reached then all brackets are properly closed
    return true
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))

// version with nested brackets
// create an array to hold opening brackets
// if the index of the string is a closing bracket, verify that it is the opposite of the last index of the array

// object to hold matching bracket notations
const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
}

// keep track of which brackets are open
let currBrackets = [];
// list of open and close brackets
let open = ["(", "[", "{"]
let close = [")", "]", "}"]

const isValid = function(str) {
    // if single bracket then it cannot have a closing bracket
    if(str.length === 1) return false
    // loop over the input
    for(let i = 0; i < str.length; i++){
        // check if current index is an opening bracket
        if(open.includes(str[i])){
            // if it is, push the bracket to the list of open brackets
            currBrackets.push(str[i])
        // check if current index is a closing bracket
        } else if (close.includes(str[i])){
            // if it is, check if it matches the last bracket style in the open brackets list
            if(brackets[currBrackets[currBrackets.length - 1]] !== str[i]){
                // if it does not then false
                return false
            } else {
                // if it does then remove the last bracket style in the open bracket list and that bracket has been closed
                currBrackets.pop()
            }
        }
    }
    // check if there are any unclosed brackets left
    return currBrackets.length === 0 ? true : false
};

console.log(isValid("{[]}")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("({})[]")) // true
console.log(isValid("({]})[]")) // false
console.log(isValid("[[")) // false

// other solutions

const isValid = function (str) {
  const stack = [];
  const complement = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of str) {
    if (!complement[char]) stack.push(char);
    else if (stack.pop() !== complement[char]) return false;
  }
  return stack.length === 0;
};
