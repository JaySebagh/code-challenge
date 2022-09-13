// https://leetcode.com/problems/to-lower-case/

// brainstorm/sudo code
// create a map of capital to lowercase
// loop through string and convert

// built in method
const toLowerCase = function(str) {
    return str.toLowerCase()
};

// map method
const toLowerCase = function(str) {
    str = str.split("")
    let convert = new Map([
        ["Q", "q"],
        ["W", "w"],
        ["E", "e"],
        ["R", "r"],
        ["T", "t"],
        ["Y", "y"],
        ["U", "u"],
        ["I", "i"],
        ["O", "o"],
        ["P", "p"],
        ["A", "a"],
        ["S", "s"],
        ["D", "d"],
        ["F", "f"],
        ["G", "g"],
        ["H", "h"],
        ["J", "j"],
        ["K", "k"],
        ["L", "l"],
        ["Z", "z"],
        ["X", "x"],
        ["C", "c"],
        ["V", "v"],
        ["B", "b"],
        ["N", "n"],
        ["M", "m"],
    ]);

    for(i in str){
        if(convert.has(str[i])){
            str[i] = convert.get(str[i])
        }
    }

    return str.join("")
};

console.log(toLowerCase("HeLlO")) // hello

// other solutions

// ascii
const toLowerCase = (str) => {
    //Calculate Ascii diff from a to A
    const diff = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
    
    return Array
        .from(str)
        .map(letter => (letter >= 'A' && letter <= 'Z') ? String.fromCharCode(letter.charCodeAt(0) + diff) : letter)
        .join('');
};
