// https://leetcode.com/problems/jewels-and-stones/

// brainstorm/sudocode
// add stones to Map
// loop through jewels and return count

const numJewelsInStones = function(jewels, stones) {
    let count = new Map(), counter = 0;
    
    for(let stone of stones) count.set(stone, count.get(stone) + 1 || 1);
    for(let jewel of jewels) counter += count.get(jewel) || 0

    return counter
};

console.log(numJewelsInStones("z", "ZZ")) // 0

// other solutions

const numJewelsInStones = (jewels, stones) => {
    const count = new Set(jewels)
    return stones.split('').reduce((res, stone) => res + count.has(stone), 0)
};
