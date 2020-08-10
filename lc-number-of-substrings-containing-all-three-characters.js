// Given a string s consisting only of characters a, b and c.
// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

// INCOMPLETE

const numberOfSubstrings = function(string) {
    // loop through the string and keep searching till a, b, and c are found
    // if found, return substring and all other substrings
    
    if(!string.includes('a') || !string.includes('b') || !string.includes('c')){
        return 0
    }
    
    let characters = ['a', 'b', 'c'];
    const removeFirstOccurance = characters.splice(characters.indexOf(string[0]), 1);
    let remainingCharacters;
    let loopEndPosition;
    for(let i = 0; i < string.length; i++){
        if(i === string.length - 1){
            
        }
        if(characters.length === 0){
            remainingCharacters = string.substr(i, string.length)
            loopEndPosition = i
            break
        }
        if(characters.includes(string[i])){
            characters.splice(string[i], 1)
        }
    }
    console.log(remainingCharacters)
    // return occuranceCount
}
