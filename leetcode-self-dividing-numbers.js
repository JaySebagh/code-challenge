// https://leetcode.com/problems/self-dividing-numbers/

// brainstorm/sudo code
// loop through the numbers between left and right
// for each number, check if the number is divisible by it's own numbers
// if it is, push it into an array
// return the array
// will have performance issues due to double loop

const selfDividingNumbers = function(left, right) {
    let answer = [];
    
    for(let i = left; i < right + 1; i++){
        let flag = 0;
        const digits = Array.from(i.toString());
        
        for(digit of digits){
            if(i % Number(digit) !== 0) flag = 1;
        }
        
        if(flag === 0) answer.push(i)
    }
    
    return answer
}

// new version

const selfDividingNumbers = function(left, right){
    let answer = [];
    for(let i = left; i < right + 1; i++){
        if(divisible(i) === 1) answer.push(i)
    }
    return answer
}

const divisible = function(num){
    let temp = num;
    
    while(num){
        lastDigit = num % 10;

        if(temp % lastDigit == 0){
            num = Math.floor(num / 10);
        } else {
            return 0
        }
    }
    return 1;
}

console.log(selfDividingNumbers(1, 22)) // [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(47, 85)) // [48,55,66,77]

// other solutions

const selfDividingNumbers = function(left, right) {
    const res = [];
    return new Array(right - left + 1).fill(0)
      .map((val, index) => left + index)
      .filter(i => [...(i.toString())].every(digit => i == 0 || i % parseInt(digit, 10) == 0));
};

//

const selfDividingNumbers = function(left, right) {
    const result = [];
    // Loop throuh all numbers
    for(let i = left; i <= right; i++) {
        let digits = i;
        let valid = true;
        // Loop through all number digits
        while(digits > 1) {
            let lastDigit = digits % 10;
            // Check if zero or not self dividing
            if (!lastDigit || i % lastDigit !== 0) {
                valid = false;
                break;
            }
            // Remove last digit from the number
            digits = Math.floor(digits / 10);
        }
        
        if (valid) {
            result.push(i);
        }
    }
    
    return result;
};

//

const selfDividingNumbers = function(left, right) {
    const nums = [];

    for(let i = left; i <= right; i++) {
      let temp = i, lastDigit = i % 10;

      while(lastDigit && !(i % lastDigit)){
        temp = Math.floor(temp / 10);
        lastDigit = temp % 10;
      }

      if(temp === 0) nums.push(i);
    }
    
    return nums;
};

// 

const selfDividingNumbers = (left, right) => {
    let output = [];
    
    for(let i = left; i <= right; i++){
        if(i < 10 || selfDividing(i))output.push(i);
    };
    
    return output;
};

const selfDividing = (num) => {
    for(const digit of `${num}`){
        if(!digit || num % digit !== 0) return false
    }
    
    return true
}
