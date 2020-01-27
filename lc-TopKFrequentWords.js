// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Example 1:

// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

let topKFrequent = function(words, k) {
    // loop through the array and add words to an object
        // if the word already exists, increment by 1
        // if the word doesn't exist, add it
    // sort the object into an array, first by frequency, then alphabetically
    // return k amount
    
    // object that will hold our frequency counter
    let counter = {}
    // array that will convert our object so we can sort
    let toArr = []
    // our final answer
    let output = []
    
    // loop over the words array
    // if the word is already in the object increment it, if not add it
    for(let i = 0; i < words.length; i++){
        words[i] in counter ? counter[words[i]]++ : counter[words[i]] = 1
    }
    
    // convert to array
    for(let i in counter) {
        toArr.push([i, counter[i]]);
    }
    
    // sort the array
    toArr.sort(function(a,b){
        // sort by frequency
        if(a[1] > b[1]){
            return -1;
        } else if(a[1] < b[1]){
            return 1;
        }
        
        // sort alphabetically
        if(a[0] < b[0]){
            return -1;
        } else if(a[0] > b[0]) {
            return 1;
        }
    })
    
    // loop through the array and return the top k frequencies
    for(let i = 0; i < k; i++){
        output.push(toArr[i][0]);
    }
    
    // return the top frequencies
    return output
}
