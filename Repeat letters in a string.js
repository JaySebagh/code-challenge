// Write a function that returns a string with each letter repeated 'n' times.

// Example:
// repeat("string", 6) --> "ssssssttttttrrrrrriiiiiinnnnnngggggg"

function repeats(str, n) {
    return str.split("").map((letter) => letter.repeat(n)).join("")
}

const answer = repeats("string", 6)
console.log(answer)
