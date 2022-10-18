// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

// brainstorm/sudo code
// 

// bad complexity because double for loop
const countCharacters = (words, chars) => {
    let temp = chars, total = 0;
    
    for(let i = 0; i < words.length; i++){
        let missing = 0;
        
        for(let j = 0; j < words[i].length; j++){
            const letter = words[i][j]
            
            if(temp.includes(letter)){
                temp = temp.replace(letter, '')
            } else {
                missing++
            }
        }
        temp = chars

        if(missing === 0) total += words[i].length
    }
    
    return total
}

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"))
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"))


// other solutions
const countCharacters = (words, chars) => {
  // The sum of length of the valid words
  let sum = 0;
  // Get the array with the counts of the characters we have
  const have = strToCntArr(chars);
  // Loop through the words
  outer: for (const word of words) {
    // Continue if we need more more total characters than we have
    if (chars.length < word.length) continue;
    // Get the array with the counts of the characters we need
    const need = strToCntArr(word);
    // Continue the outer loop when we need more characters than we have
    for (let i = 0; i < 26; i++) if (have[i] < need[i]) continue outer;
    // Any word that reaches this point is valid, so add the length to sum
    sum += word.length;
  }
  // Return the sum of the lengths of all the valid words
  return sum;
};

