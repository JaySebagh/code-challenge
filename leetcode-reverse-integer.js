// https://leetcode.com/problems/reverse-integer/

// brainstorm/sudo code
// convert to string
// if last char is 0, remove it
// check if first char is negative
    // if it is, remove it and notate it
// reverse string and append - to front if needed
// convert to number and return


const reverse = (num) => {
    let convert = num.toString(), sign = false; rev = "";
    
    if(convert[convert.length - 1] === "0") convert = convert.slice(0, -1);
    if(convert[0] === "-"){
        convert = convert.slice(1);
        sign = true;
    };

    for(let i = convert.length - 1; i >= 0; i--) rev += convert[i];

    if(sign) rev = "-" + rev;
    
    return rev > (2 ** 31) - 1 || rev < -(2 ** 31) ? 0 : rev;
};

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
console.log(reverse(1230)) // 321
console.log(reverse(1534236469)) // 0
