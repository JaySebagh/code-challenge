// Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

// Return the maximum possible length of s.

let maxLength = function(arr) {
    // sort the array from largest to smallest
    // set the largest as a variable
    // check if the word in the array has a letter that is in the variable
        // if not, append to the variable
        // if it does, move to the next item
    
    
    
    // sort array from largest to smallest then alphabetically
    let sorted = arr.sort((a, b) => b.length - a.length || a.localeCompare(b));
    // split the words into letters
    let splitWords = sorted.map(word => word.split(''))
    
    // remove words with non unique letters
    // INCOMPLETE
    let uniqueWords = splitWords.map(word => {
        let letters = '';
        for(i in word){
            if(letters.includes(word[i])){
                return word.join('');
            } else {
                letters += word[i]
            }
        }
    })
    
    console.log(uniqueWords)
    
    // remove the largest word from array
    let biggestWord = sorted.splice(0, 1).join('');
    
    // loop through the other words
    for(i in splitWords){
        // unique checker variable
        let unique = true;
        // loop through each letter of the word
        for(j in splitWords[i]){
            // if that letter is in the biggestWord variable, set unique checker to false and break
            if(biggestWord.includes(splitWords[i][j])){
                unique = false;
                break;
            }
            
        }
        // if the word is unique, append it to the biggestWord
        if(unique === true) biggestWord += splitWords[i].join('')
    }
    
    return biggestWord.length
}
