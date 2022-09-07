// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// brainstorm/sudo code
// split the str by whitespace
// reverse each word
// join

const reverseWords = function(str) {
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ")
};

console.log(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"

// other solutions

const reverseWords = function(str) {
    let res = '';
    let word = '';
    for(let char of str){
        if(char === ' '){
            res += word + char;
            word = '';
        } else {
            word = char + word;
        }
    }
    return res + word;
};

function reverse(word) {
	// 1. Split the word into an array of characters
    let word = word.split('')
	
	// 2. Initialize our two pointers, left and right
    for (let left = 0, right = word.length - 1; left < right; left++, right--) {
		// 3. Swap the left and right characters with the help of a temp variable
        const temp = word[left]
        word[left] = word[right]
        word[right] = temp
		
		// 4. Increment left and decrement right to move towards the middle of the array
		// 5. Repeat the loop while left < right
		// (The above steps are implemented in the definition of the for loop)
    }

	// 6. Join the array and return it as a string
    return word.join('')
}
