// https://leetcode.com/problems/reverse-string/

// brainstorm/sudo code
// traverse half the array
// if the word is odd length, traverse the floor of half the array (eg 7 => 3.5 => 3)
// store the current index in a letter holder
// set a reverse index order that decrements each loop
// set the current index value to the reverse index value
// set the reverse index value to the letter holder
// return nothing since the problem states not to

const reverseString = function(str) {
    if(str.length === 1) return str;
    let letterHolder;
    let reverseIndex = str.length - 1;
    for(let i = 0; i < Math.floor(str.length / 2); i++){
        letterHolder = str[i];
        str[i] = str[reverseIndex];
        str[reverseIndex] = letterHolder;
        reverseIndex--;
    };
};

console.log(reverseString(["h","e","l","l","o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); // ["h","a","n","n","a","H"]
console.log(reverseString(["t","e","s","t"])); // ["t","s","e","t"]
console.log(reverseString(["a"])); // ["a"]

// other solutions

// same solution but using pointers instead
const reverseString = function(str) {

    let left = 0;
    let right = str.length-1;

    while(left < right){
        let holder = str[left];
        str[left] = str[right];
        str[right] = holder;
        left++;
        right--;
    };
};

// pointer solution but written differently

const reverseString = function(str) {
    let left = 0, right = str.length - 1;
    while (left < right) [str[right--], str[left++]] = [str[left], str[right]];
};
