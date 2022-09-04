// https://leetcode.com/problems/fibonacci-number/

// brainstorm/sudo code
// create an array and keep adding the sum of the previous 2 numbers

const fib = function(num) {
    if(num === 0) return 0;
    let sequence = [0, 1]
    for(let i = 1; i < num; i++) sequence.push(sequence[i-1] + sequence[i]);
    return sequence.pop()
};

console.log(fib(7)) // 13
console.log(fib(0)) // 0

// other solutions

// same solution but written better
const fib = num => {
    let sequence = [0, 1];
    
    for (let i = 2; i <= num; i++) sequence.push(sequence[i-2] + sequence[i-1]);
    
    return sequence[num];
};

//

const fib = function(num) {
    if(num < 2) return num;
    
    let sum = 1,
        prev = 0;
    
    for(let i = 2; i <= num; i++){
        sum += prev;
        prev = sum - prev;
    }
    
    return sum;
};
