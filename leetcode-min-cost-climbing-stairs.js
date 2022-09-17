// https://leetcode.com/problems/min-cost-climbing-stairs/

const stairs = (cost) => {
    const start = cost[0] < cost[1] ? 0 : 1;
    let total = 0;

    for(let i = start; i < cost.length; i++){
        total += cost[i];
        if(cost[i] <= cost[i + 1]) i++
    }

    console.log(total)
};

console.log(stairs([1,100,1,1,1,100,1,1,100,1])) // 6
// console.log(stairs([10,15,20])) // 15


// other solutions

const minCostClimbingStairs = function(cost) {
    if(cost.length === 1) return 0;
    if(cost.length === 2) return Math.min(cost[0], cost[1]);
    
    let first = cost[0];
    let second = cost[1];
    
    for(let i = 2; i < cost.length; i++){
        const curr = cost[i] + Math.min(second, first);
        
        first = second;
        second = curr;
    }
        
    return Math.min(second, first);
};

