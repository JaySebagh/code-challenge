// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/

// brainstorm/sudo code
// check if the input number ('len') is even or odd
// if it's odd, return a string with the letter "a" repeated 'len' times
// if it's even, return a string witht he letter "a" repeated 'len - 1' times and append "b"

const generateTheString = (len) => {
    return len % 2 === 0 ? "a".repeat(len - 1) + "b" : "a".repeat(n)
}

console.log(generateTheString(3)) // "aaa"
console.log(generateTheString(4)) // "aaab"

// other solutions

const generateTheString = (len) => {
    let res = Array(len).fill('a')
    
    if(!(len & 1)) res[len - 1] = 'b'
    
    return res.join('')
};

//

const generateTheString = (len) => {
    return len % 2 === 0 ? `${'a'.repeat(len - 1)}b` : 'a'.repeat(len);
}
