// https://leetcode.com/problems/maximum-score-after-splitting-a-string/

// brainstorm/sudo code
// convert sequence into array of numbers
// create a variable to hold the largest sum
// loop through sequence
// calculate the sum of zeros in the left side of the index and calculate the sum of ones in the right side of the index
// calculate the sum of both and replace the variable largest if it is larger
// return the variable largest

const maxScore = (sequence) => {
    sequence = sequence.split("").map(Number)
    
    let largest = 0;

    for(let i = 1; i < sequence.length; i++){
        const left = sequence.slice(0, i), right = sequence.slice(i, sequence.length);
        const sumLeft = left.reduce((a, b) => a + b), sumRight = right.reduce((a, b) => a + b);
        const sumBoth = left.length - sumLeft + sumRight
        largest = sumBoth > largest ? sumBoth : largest
    }

    return largest
};
