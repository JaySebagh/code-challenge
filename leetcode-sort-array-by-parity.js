// https://leetcode.com/problems/sort-array-by-parity/

// brainstorm/sudo code
// loop through the nums
// check if even or odd
// push number to corresponding array
// merge even and odd arrays with even in front

// using 2 arrays and spreading them
const sortArrayByParity = function(nums) {
    let even = [], odd = [];

    for(let num of nums) num % 2 === 0 ? even.push(num) : odd.push(num);

    return [...even, ...odd]
}

console.log(sortArrayByParity([3,1,2,4])) // [4,2,3,1] [2,4,1,3] [4,2,1,3] 


// other solutions

const sortArrayByParity = function(nums) {
    const temp = [];
    nums.forEach(v => v % 2 === 0 ? temp.unshift(v) : temp.push(v));
    
    return temp;
};
