// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

// brainstorm/sudo code
// create a conversion map
// seperate # and previous 2 numbers
// seperate all other numbers
// convert

// not fully functional
// unclean method
const freqAlphabets = (str) => {
    str = str.split("")
    const alphabet = " abcdefghijklmnopqrstuvwxyz"
    let decrypt = "";

    for(let i = 0; i < str.length; i++){
        if(str[i + 2] === "#"){
            str[i + 2] = ","
            i += 2
        } else {
            str[i] = "," + str[i];
        }
    }
    
    str = str.join("").split(",")

    for(let i = 0; i < str.length; i++){
        if(str[i] !== ""){
            decrypt += alphabet[str[i]]
        }
    }

    console.log(decrypt)
};

console.log(freqAlphabets("10#11#12")) // "jkab"
console.log(freqAlphabets("1326#")) // "acz"


// other solutions

const freqAlphabets = str => {
  const stack = [];
  for (const char of str) {
    if (char !== '#') { stack.push(char); continue; }
    const digit = stack.pop();
    stack.push(map[(stack.pop() + digit)]);
  }
  let ret = '';
  for (const char of stack) {
    ret += char <= '9' ? map[char] : char;
  }
  return ret;
};

//

const freqAlphabets = s => {
  let ret = '';
  for (let i = 0; i < s.length; ++i) {
    ret += map[s[i + 2] === '#' ? (i += 2, s[i - 2] + s[i - 1]) : s[i]];
  }
  return ret;
};

//

const freqAlphabets = s => s.replace(/(\d\d#|\d)/g, t => map[t.length === 3 ? t[0] + t[1] : t]);
