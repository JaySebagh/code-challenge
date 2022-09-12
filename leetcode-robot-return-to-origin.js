// https://leetcode.com/problems/robot-return-to-origin/

// brainstorm/sudo code
// loop through the moves
// create a map
// remove the reverse move off of the stack (eg: L => R)
// return sum of values as true or false

const judgeCircle = function(moves) {
    let remainder = 0;
    let visited = new Map([
        ['L', 0],
        ['R', 0],
        ['U', 0],
        ['D', 0],
    ]);;
    let opposite = new Map([
        ['L', 'R'],
        ['R', 'L'],
        ['U', 'D'],
        ['D', 'U'],
    ]);
    
    for(let move of moves){
        const reverse = opposite.get(move);
        
        visited.get(reverse) > 0 ? visited.set(reverse, visited.get(reverse) - 1) : visited.set(move, visited.get(move) + 1);
    };

    visited.forEach(value => remainder += value)

    return remainder === 0
};

console.log(judgeCircle("UUDDLRLR")); // true
console.log(judgeCircle("UDLRR")); // false

// other solutions

// Time: O(n)
// Space: O(1)

const judgeCircle = function(moves) {  
    let x = 0, y = 0;
    
    for(let move of moves){
        if(move === "R") x++;
        if(move === "L") x--;
        if(move === "U") y++;
        if(move === "D") y--;
    };
    
    return x === 0 && y === 0;
};

// same as previous but utilizing switch

const judgeCircle = function(moves) {
    let x = 0, y = 0;
    for(let move of moves){
        switch(move) { 
            case 'R': x++ ;break;
            case 'L': x-- ;break;
            case 'U': y++ ;break;
            case 'D': y-- ;break;
        }
    }
    return x === 0 && y === 0
};

// one line
// dislike this one due to readability

const judgeCircle = (moves) => {
    return moves.split('')
        .reduce((p, m) => [p[0] + (m === 'R') - (m === 'L'), p[1] + (m === 'U') - (m === 'D')], [0, 0])
        .join('') === '00'
};

//

const judgeCircle = function(moves) {
    return moves.split('L').length === moves.split('R').length && moves.split('U').length === moves.split('D').length
};

