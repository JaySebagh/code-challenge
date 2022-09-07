// https://leetcode.com/problems/student-attendance-record-i/

// brainstorm/sudo code
// loop through string
// add to Map or increment
// check if A is greater than 2
// chick if L is 3 in a row

const checkRecord = function(str) {
    let attendance = new Map();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "L" && str[i + 1] === "L" && str[i + 2] === "L") return false
        if(str[i] === "A" && attendance.get("A")) return false
        attendance.set(str[i], attendance.get(str[i]) + 1 || 1)
    }
    return true
};

console.log(checkRecord("PPALLP")) // true
console.log(checkRecord("PP"))  // true
console.log(checkRecord("AL")) // true
console.log(checkRecord("PPALLL")) // false
console.log(checkRecord("PPAALL")) // false
console.log(checkRecord("PPAAALL")) // false
console.log(checkRecord("PAPALLA")) // false
console.log(checkRecord("LPPAALL")) // false
console.log(checkRecord("AA")) // false
console.log(checkRecord("AAPPP")) // false
console.log(checkRecord("AAPP")) // false

//

const checkRecord = function(str) {
    return str.split('A').length <= 2 && str.indexOf('LLL') === -1;
};

//

const checkRecord = function(str) {
    return str.split("").filter(str => str == "A").length <= 1 && !str.includes("LLL");
};
