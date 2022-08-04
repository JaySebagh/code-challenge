// https://leetcode.com/problems/palindrome-number/
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// brainstorm
// reverse the integer
// compare if both integers are the same

const isPalindrome = function(integer) {
    // convert integer to string, reverse it, convert back into integer
    const reversed = Number(integer.toString().split("").reverse("").join(""))
    // check if the reversed integer matches the intial integer
    return reversed === integer
};

console.log(isPalindrome(121))
console.log(isPalindrome(123))

// other solutions

const isPalindrome = function(integer) {
    // use string interpolation
    const reverse = `${integer}`.split('').reverse().join('');
    // compare the value regardless of types
    return integer == reverse;
};

//

const isPalindrome = function(integer) {
    // convert input to string
    const toStr = integer.toString();
    // if lenght is 1 return true
    if (toStr.length === 1) {
        return true;
    }
    // start of the string
    const start = toStr[0];
    // end of the string
    const end = toStr[toStr.length - 1];
    // if the start does not match the end return false
    if (start !== end) {
        return false;
    }
    // if start and end both match and the length is 2, return true
    if (toStr.length === 2) {
        return true;
    }
    // create a substring of the string excluding the first and last index
    const subStr = toStr.substring(1, toStr.length - 1);
    // recursion
    return isPalindrome(subStr);
};
