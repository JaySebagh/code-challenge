// https://leetcode.com/problems/arranging-coins/
// brainstorm/sudo code
// loop over input
// subtract index from input
// increment counter until less than 1
// return counter

// edge case: large number?
// find math formula

const arrangeCoins = function(num){
    if(num === 1) return 1;
    let counter = 0;
    for(let i = 1; num > 0; i++){
        num -= i;
        if(num === 0) return counter + 1;
        if(num < 1) return counter;
        counter++;
    };
};

console.log(arrangeCoins(3)); // 2
console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3
console.log(arrangeCoins(1)); // 1
console.log(arrangeCoins(2147483647)); // 65535

// other solutions

// (1 + x) * x / 2 ≤ n
// x^2 + x ≤ 2n
// 4x^2 + 4x ≤ 8n
// (2x + 1)(2x + 1) - 1 ≤ 8n
// x ≤ (√(8n + 1) - 1) / 2

const arrangeCoins = function(num){
    return Math.floor((Math.sqrt(8 * num + 1) - 1) / 2);
};

//

const arrangeCoins = function(n) {
    let stairs = 0;
    
    while(stairs <= n){
        n -= stairs;
        stairs++;
    };
    
    return stairs-1;
};

//

const arrangeCoins = function(num){
    let guess = Math.round(Math.sqrt(2*num));
    let used_coins = guess * (guess + 1) / 2;
    
    while (used_coins <= num){
        guess++;
        used_coins = guess * (guess + 1) // 2;
    };
    
    return (guess > 0) ? guess-1 : 0
};

//

const arrangeCoins = function(num){
    let count = 0;
    let i = 1;
    
    while(1){
        if(num - i >= 0){
            count++;
            n-=i;
            i++;
        }
        else return count;
    }
};
