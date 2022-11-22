// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

let repeatedSubstringPattern = function(s) {
    // take first character and see if it repeats
    // continue adding the next character and checking
    // stop once half way reaches (cannot be repeating if its longer than half)
    
    if(s.length === 1) return false
    
    let subString = ""
    
    for(let i = 0; i < s.length / 2; i++){
        subString += s[i];
        let check = s.split(subString).join('')
        if(check.length === 0){
            return true
        }
    }
    
    return false
}


Other people's solutions:

let repeatedSubstringPattern = function(s) {
    return s.repeat(2).slice(1, -1).includes(s);
}
