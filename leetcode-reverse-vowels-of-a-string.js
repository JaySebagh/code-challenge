// https://leetcode.com/problems/reverse-vowels-of-a-string/

// brainstorm/sudo code
// create two pointers left and right
// if the letter is a consonant, continue
// if the letter is a vowel, swap it with the other pointer's vowel

const reverseVowels = function(str) {
    let phrase = str.split("")
    let left = 0, right = str.length - 1, vowels = new Set();
    vowels.add("a").add("e").add("i").add("o").add("u");
    console.log(vowels)
    while(left < right){
        if(vowels.has(phrase[left].toLowerCase())){
            if(vowels.has(phrase[right].toLowerCase())){
                const holder = phrase[left];
                phrase[left] = phrase[right];
                phrase[right] = holder;
                left++
                right--
            } else {
                right--
            }
        } else {
            left++
        }
    }
    return phrase.join("")
};

console.log(reverseVowels("opaque")) // "epuqao"
console.log(reverseVowels("hello")) // "holle"
console.log(reverseVowels("leetcode")) // "leotcede"
console.log(reverseVowels("weirdo")) // "woirde"
console.log(reverseVowels("w")) // w
console.log(reverseVowels("e")) // e
console.log(reverseVowels("aA")) // "Aa"

// other solutions
// using stack

const reverseVowels = function(str) {
  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
  let stack = []
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      stack.push(str[i])
    }
  }
  let ans = []
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      ans.push(stack.pop())
    } else {
      ans.push(str[i])
    }
  }
  return ans.join('')
};
