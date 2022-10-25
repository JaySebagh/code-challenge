// https://leetcode.com/problems/find-common-characters/

// brainstorm/sudo code
// grab the biggest word
// check if each letter is in all the other words
// if it is push it to an array


// stuck
// poor complexity due to double for loop
const commonChars = function(words) {
    let first = words[0].split("")
    console.log(first)
    for(let i = 0; i < first.length; i++){
        for(let j = 1; j < words.length, i++){
            if(words[j].indexOf(first[i] > -1)){
                words[j] = words[j].splice(words[j].indexOf(first[i]), 1);
            }
        }
    }
};

console.log(commonChars(["bellaz","labelz","roller"])) // ["e","l","l"]


// other solutions

const commonChars = function(words) {
  let res = [...words[0]];
  for (let i = 1; i < words.length; i++) {
    res = res.filter(char => {
      const len = words[i].length;
      words[i] = words[i].replace(char, "");
      return len > words[i].length;
    });
  }
  return res;
};

