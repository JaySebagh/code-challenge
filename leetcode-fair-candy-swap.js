// https://leetcode.com/problems/fair-candy-swap/

// brainstorm/sudo code
// sum all boxes of alice and bob  then divide by 2 to find the equal split of candy
// swap around array values until both sums are equal

// brute force method only works with 2 digit arrays
const fairCandySwap = (alice, bob) => {
    const half = ([...alice, ...bob].reduce((a, b) => a + b)) / 2

    if (bob[0] + alice[1] === half && alice[0] + bob[1] === half) return [alice[0], bob[0]]
    if (bob[1] + alice[1] === half && bob[0] + alice[0] === half) return [alice[0], bob[1]]
    if (alice[0] + bob[0] === half && alice[1] + bob[1] === half) return [alice[1], bob[0]]
    if (alice[0] + bob[1] === half && bob[0] + alice[1] === half) return [alice[1], bob[1]]
};

console.log(fairCandySwap([1, 2], [3, 4])) // [1, 3]


// other solutions

const fairCandySwap = (alice, bob) => {
    const sumAlice = alice.reduce((acc, cur) => acc + cur);
    const sumBob = bob.reduce((acc, cur) => acc + cur);
    const diff = (sumAlice - sumBob) >> 1;
    const aliceSet = new Set(alice);
    for (const candy of bob) {
        if (aliceSet.has(candy + diff)) return [candy + diff, candy];
    }
};
