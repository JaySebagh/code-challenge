// https://leetcode.com/problems/baseball-game/

// brainstorm/sudo code

// x = add integer
// + = sum of previous 2
// D = double previous
// C = remove previous

// create variable holders of the last 2 values
// apply math following the logic provided and using the variables to keep track

const calPoints = function(ops) {
    // remove C and the previous operation
    for(let i = 0; i < ops.length; i++){
        if(ops[i] === "C"){
            ops.splice(i - 1, 2)
            i -= 2
        };
    }

    let sum = 0, prev = 0, next = 0;
    
    for(op of ops){
        if(op === "+"){
            sum += prev + next
            let temp = prev
            prev = next;
            next = temp + next;
        } else if(op === "D") {
            sum += (next * 2)
            prev = next;
            next = (next * 2);
        } else {
            op = Number(op);
            sum += op;
            prev = next;
            next = op;
        }
    }
    
    return sum
};

console.log(calPoints(["-60","D","-36","30","13","C","C","-33","53","79"])) // -117
console.log(calPoints(["5","2","C","D","+"])) // 30
console.log(calPoints(["5","-2","4","C","D","9","+","+"])) // 27
console.log(calPoints(["1","C"])) // 0

// other solutions

// using stack
const calPoints = function(ops) {
    let stack = [];
    
    ops.forEach((op) => {
        if(parseInt(op)){
            stack.push(parseInt(op))
        }
        else if(op === '+'){
            stack.push((stack[stack.length - 1] || 0 ) + (stack[stack.length - 2] || 0 ))
        }
        else if(op === 'D'){
            stack.push((stack[stack.length - 1] || 0 ) * 2)
        }
        else if(op === 'C'){
            stack.pop();
        }
    })
    
    return stack.reduce((a, b) => a + b, 0)
};

// stack

const calPoints = ops => {
    let record = []

    for(let i = 0; i < ops.length; i++){
        let current = ops[i]

        if(Number.isInteger(parseInt(current))){
            record.push(parseInt(current))
        } else if (current === '+') {
            record.push(record[record.length - 2] + record[record.length - 1])
        } else if (current === 'D') {
            record.push(2 * record[record.length - 1])
        } else {
            record.pop()
        }
    }
    return record.reduce((a, b) => a + b)
};

// stack with switch
var calPoints = function(ops) {
    const stack = [];
    
    for(let i = 0; i < ops.length; i++){
        switch(ops[i]){
            case 'D': {
                const last = stack[stack.length - 1];
                stack.push(last * 2);
                break;
            }
            case 'C':{
                stack.pop();
                break;
            }
            case '+': {
                const prev = stack[stack.length - 2];
                const next = stack[stack.length - 1];
                stack.push(prev + next);
                break;
            } 
            default: {
                stack.push(Number(ops[i]))
                break;
            }
        }
    }
    
    return stack.reduce((prev, cur) => prev + cur, 0);
};

//

const calPoints = ops => {
    return ops.reduce((score, op, idx) => {
        if(op === 'C') score.pop()
        else if (op === 'D') score.push(score[score.length - 1] * 2)
        else if (op === '+') score.push(score[score.length - 1] + score[score.length - 2])
        else score.push(+op)
        return score
    }, []).reduce((sum, num) => sum += num, 0)
}
