// Write a function called reverseString that accepts a string and returns a reversed copy of the string.

// Input Example:
// 'hello world'
// 'asdf'
// 'CS rocks!'

// Output Example:
// 'dlrow olleh'
// 'fdsa'
// '!skcor SC'

function reverseString(str) {
    // Separate each letter using split(""), reverse the order using reverse(), reconnect the letters using join("").
    return str.split("").reverse().join("");
}

const answer = reverseString("hello world");

console.log(answer)