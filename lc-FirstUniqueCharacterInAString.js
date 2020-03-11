// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

let firstUniqChar = function(s) {
    // loop through string
    // append value to frequency count object
    // grab the first number with count 1
    
    
    // frequency count object
    let freqCount = {}
    
    // loop through string
    for(let i = 0; i < s.length; i++){
        // check if letter is in object
        if(freqCount[s[i]]){
            // if it is, increment count by 1
            freqCount[s[i]]++
        } else {
            // if it isn't, add to object
            freqCount[s[i]] = 1
        }
    }
    
    // search the object for the first value that is 1 and return its key
    const letter = Object.keys(freqCount).find(key => freqCount[key] === 1)
    
    // return the index of the letter
    return s.indexOf(letter)
};
