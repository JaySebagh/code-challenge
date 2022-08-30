// https://leetcode.com/problems/license-key-formatting/
// brainstorm/sudo code
// remove dashes
// capitalize
// add a dash every k characters in reverse order

const licenseKeyFormatting = function(s, k) {
    // remove hyphen and split into array by letter
    s = s.split("-").join("").split("")
    // reverse loop through array and decrement k times
    for(let i = s.length - k; i > 0; i -= k){
        // append a hyphen to the letter using string interpolation/template literal
        s[i] = `-${s[i]}`
    }
    // convert array back to string and capitalize
    return s.join("").toUpperCase()
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4))
console.log(licenseKeyFormatting("2-5g-3-J", 2))
