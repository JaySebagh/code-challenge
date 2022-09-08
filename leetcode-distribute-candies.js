// https://leetcode.com/problems/distribute-candies/

// brainstorm/sudo code
// loop through array
// add to Set
// return Set length or half of array length

const distributeCandies = function(candyType) {
    let candies = new Set();
    
    for(candy of candyType) candies.add(candy)
        
    return candies.size > candyType.length / 2 ? candyType.length / 2 : candies.size 
};

console.log(distributeCandies([1,1,2,2,3,3])) // 3
console.log(distributeCandies([1,1,2,3])) // 2
console.log(distributeCandies([6,6,6,6])) // 1

// other solutions

const distributeCandies = candies => Math.min(new Set(candies).size, candies.length / 2);
