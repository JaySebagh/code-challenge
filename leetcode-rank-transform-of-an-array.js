// https://leetcode.com/problems/rank-transform-of-an-array/

// brainstorm/sudo code
// copy array
// sort array
// create a map with number as key and index as value
// loop through original array and replace each number with kv from map

// fails certain test cases
const arrayRankTransform = (arr) => {
    const order = [...arr].sort((a, b) => a - b);
    let rank = new Map();

    for(let i = 0; i < order.length; i++){
        if(!rank.has(order[i])) rank.set(order[i], i + 1)
    }
    for(let i = 0; i < arr.length; i++) arr[i] = rank.get(arr[i])
    
    return arr
};

console.log(arrayRankTransform([40,10,20,30])) // [4,1,2,3]
console.log(arrayRankTransform([100,100,100])) // [1,1,1]
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))
// [5,3,4,2,8,6,7,1,3]


// other solutions

const arrayRankTransform = function (arr) {
    var map = new Map();
    [...new Set(arr)].sort((a, b) => a - b).map((x, i) => map.set(x, i + 1));
    return arr.map((x) => map.get(x));
};

// hash

const arrayRankTransform = function(arr) {
    if(arr.length == 0) return arr;
    
    // clone array & sort it
    let sortedArr = arr.slice().sort((a,b) => a - b);
    let res = [];
    let dictionary = {};
    
    // assign ranks
    let rank = 1;
    for(let i = 0; i < sortedArr.length; i++) {
        if(!dictionary[sortedArr[i]]) {
            dictionary[sortedArr[i]] = rank;
            rank++;
        }
    }
    
    // rank transform of an array
    for(let j = 0; j < arr.length; j++) {
        let rankVal = dictionary[arr[j]];
        res.push(rankVal)
    }
    return res; 
}
