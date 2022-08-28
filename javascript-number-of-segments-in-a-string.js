// https://leetcode.com/problems/number-of-segments-in-a-string/

// brainstorm/sudo code
// split the string by whitespace and return the length

// version 1
// works except for whitespace edgecases such as countSegements("     ")
const countSegments = function(str) {
    return str.split(" ").length
};

// version 2
const countSegments = function(str) {
    const arr = str.split(" ");
    let len = arr.length;
    for(segment of arr){
        if(segment === "") len--;
    };
    return len;
};

// version 3
const countSegments = function(str) {
    return str.split(" ").filter(segment => segment.trim().length > 0).length;
};

console.log(countSegments("Hello, my name is John")); // 5
console.log(countSegments("                ")); // 0

// other solutions
const countSegments = function(str) {
    return str.split(' ').filter(Boolean).length;
};

//

const countSegments = function(str) {
    return str.split(' ').filter(segment => segment.length > 0).length;
};
