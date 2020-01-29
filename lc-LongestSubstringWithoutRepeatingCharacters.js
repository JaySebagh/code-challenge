// Given a string, find the length of the longest substring without repeating characters.

let lengthOfLongestSubstring = function(s) {
    // have a visited array
    // check each letter one by one
        // if its unique, add to visited
        // if the letter is in visited, store the substring
            // repeat but shifted one character
    
    // hold visited letters
    let visited = [];
    // hold substrings
    let longest = [];
    // variable to know where to start
    let start = 0;
    
    for(let i = 0; i < s.length; i++){
        // check if the letter has been visted
        if(visited.includes(s[i])){
            // push the substring to the array
            longest.push(visited.join(''))
            // reset visited array
            visited = [];
            // increment our starting point
            start++;
            // modify position of i so we can look for the next substring
            i = start - 1;
        } else {
          // if the letter has not been visited, add to visited
          visited.push(s[i]);
        }
    }
    
    // push any substring left in visited array (when testing 'aab', I found out that 'ab' was left in the visited')
    longest.push(visited.join(''))
    // sort to get the longest substring and return it
    longest.sort((a,b) => b.length - a.length)
    return longest[0].length
}
