// A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

//    If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
//    For example, the word 'apple' becomes 'applema'.
//     
//    If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
//    For example, the word "goat" becomes "oatgma".
//     
//    Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
//    For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
//
// Return the final sentence representing the conversion from S to Goat Latin. 

let toGoatLatin = function(S) {
    // split the string and loop over
    // check if first letter is vowel
        // if it is append 'ma'
        // if it isn't, move the first letter to the end and append 'ma'
    // repeat letter 'a' i + 1 times and append to each word
    
    // split string
    let words = S.split(' ')
    for(let i = 0; i < words.length; i++){
        // toLowerCase for case sensitivity
        let ltr = words[i][0].toLowerCase()
        // check if vowel
        if(ltr == "a" || ltr == "e" || ltr == "i" || ltr == "o" || ltr == "u"){
            // append 'ma'
            words[i] = words[i] + 'ma'
        } else {
            // append first letter and remove it, append 'ma'
            words[i] = (words[i] + words[i][0] + 'ma').slice(1)
        }
        // repeat 'a' i + 1 times
        const repeatA = 'a'.repeat(i + 1)
        // append to each word
        words[i] = words[i] + repeatA
    }
    
    return words.join(' ')
}
