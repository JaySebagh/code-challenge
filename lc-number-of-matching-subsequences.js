// Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

// WORKS FINE EXCEPT FOR THIS TEST CASE https://leetcode.com/submissions/detail/357448776/testcase/

let numMatchingSubseq = function(inputStr, words) {
    // loop through the words array and split each word
    // check if each letter in each word is in the string
        // if it is, increment a counter
    
    let sortString = inputStr.split("").sort().join("")
    let counter = 0;
    
    for(i in words){
        const sortLetters = words[i].split("").sort()
        let stringCopy = sortString
        for(j in sortLetters){
            if(!stringCopy.includes(sortLetters[j])){
                counter++
                break
            } else {
                const letterIndex = stringCopy.indexOf(sortLetters[j])
                const removeLetter = stringCopy.replace(stringCopy[letterIndex], "")
                stringCopy = removeLetter
            }
        }
    }
    
    const subseq = words.length - counter
    return subseq
}

___________________________________________________________________________________________________________________
Other people's solutions:
___________________________________________________________________________________________________________________
let numMatchingSubseq = function(S, words) {
    let num = 0 ;
    for(let word of words){
        let preIndex = -1 , trackFlag = true;
        //search by index with start index && loop each word
        for(let i = 0 ; i < word.length ; i++ ){
            let letter  = word[i];
            let idx = S.indexOf(letter , preIndex +1);
            if(idx <= preIndex) trackFlag = false;
            preIndex = idx
        }
        
        if(trackFlag) num++;
    }
    
    return num;
};
___________________________________________________________________________________________________________________
