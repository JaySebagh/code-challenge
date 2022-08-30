// https://leetcode.com/problems/number-complement/
// brainstorm/sudo code
// convert to binary
// flip binary
// convert to number

const findComplement = function(num) {
    let binary = [];
    let complement = 0
    
    while(num > 0){
        let remain = Math.ceil(num / 2 % 1);
        num = Math.floor(num / 2);
        remain === 0 ? binary.unshift(1) : binary.unshift(0)
    }
    
    for(let i in binary){
        complement = complement * 2 + (binary[i] === 1 ? 1 : 0);
    }
    
    return complement
};

console.log(findComplement(5)) // 2

// other solutions

const findComplement = function(num) {    
    let d = 2;
    while (d <= num) {
        d *= 2;
    }    
    return d - num - 1;
};
