// https://leetcode.com/problems/most-common-word/

// brainstorm/sudo code
// add banned words to a Set
// split the paragraph and loop over it
// check if the word is in the banned Set
// if it is not add it to a Map counter
// return the highest count

const mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned), counter = new Map();
    const words = paragraph.replace(/["!?',;.]/g," ").split(" ");

    for(let word of words){
        lower = word.toLowerCase();
        
        if(!bannedSet.has(lower) && word !== "") counter.set(lower, counter.get(lower) + 1 || 1);
    };
    
    const largest = [...counter.entries()].reduce((a, b) => a[1] < b[1] ? b : a);
    
    return largest[0];
};

console.log(mostCommonWord("..Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])); // ball

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit", "the", "after"])); // ball

console.log(mostCommonWord("a.", [])); // a

console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"])); // b


// other solutions

const mostCommonWord = (paragraph, banned) => {
  const bannedSet = new Set(banned), map = {};
  const words = paragraph.toLowerCase().split(/\W+/);
  let answer = {count: 0, word: ''}
  
  for(const word of words) {
    if(!bannedSet.has(word)){
      if(map[word] == null) map[word] = 0;
      map[word]++;
        
      if(map[word] > answer.count){
          answer.count = map[word]
          answer.word = word
      }
    }
  }

  return answer.word;
};

//

const mostCommonWord = function(paragraph, banned) {
    // Split the paragraph into an array of words in lowercase
    const words = paragraph.toLowerCase().split(/\W/);
    // Create a map to act as histogram of words
    const mp = Object.create(null);
    // Filter out empty strings and make the histogram
    words.filter(x => x).map(x => mp[x] = x in mp ? mp[x] + 1 : 1);
    // Rather than deleting banned words, just set its value to a negative number
    banned.map(x => mp[x] = -1)
    // Return the word with the highest count in the histogram
    return Object.keys(mp).reduce((a, b) => mp[a] > mp[b] ? a : b);
};
