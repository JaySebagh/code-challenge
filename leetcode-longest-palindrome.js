// https://leetcode.com/problems/longest-palindrome/

// brainstorm/sudo code
// loop through the string and add it to a map with value as character count
// get the values
// if the value is greater than 1, check how many times it is divisable by 2 (floored) and add it to a counter
// add +1 for the middle letter of a palindrome in the case that there's excess letters

// check if exist in map
    // if it doesnt add it
    // if it does check the value
        // if it's 1, add 1 and increment counter
        // if it's even number add 1
        // if it's odd number add 1 and increment counter
    // if one of the values is an odd number, add one for the middle letter of palindrome

const longestPalindrome = function(str) {
    const occurances = new Map();
    let counter = 0;
    for(i in str){
        const letter = str.charAt(i)
        occurances.set(letter, occurances.get(letter) + 1 || 1);
        if(Number.isInteger(occurances.get(letter) / 2)) counter+=2;
    }
    for(i in str){
        if(occurances.get(str.charAt(i)) % 2 !== 0){
            counter++
            break;
        }
    }
    return counter
};

console.log(longestPalindrome("racecar")) // 7
console.log(longestPalindrome("abccccdd")) // 7
console.log(longestPalindrome("a")) // 1
console.log(longestPalindrome("ab")) // 1
console.log(longestPalindrome("abb")) // 3

// other solutions
const longestPalindrome = function(str) {
  let counter = 0;
  let keys = {};
  
  for(char of str){
    keys[char] = (keys[char] + 1 || 1);
    if(keys[char] % 2 == 0) counter += 2;
  }
  return str.length > counter ? counter + 1 : counter;
};

// using Set()

const longestPalindrome = function(str) {
    const visited = new Set();
    let counter = 0;
    
    for(letter of str) {
        if (visited.has(letter)) {
			counter += 2;
            visited.delete(letter);
        } 
		else {
            visited.add(letter);
        }
    }

    return counter + (visited.size > 0 ? 1 : 0);
};
