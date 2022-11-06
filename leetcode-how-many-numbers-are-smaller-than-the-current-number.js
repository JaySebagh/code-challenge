// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// brainstorm/sudo code
// sort nums
// loop through sorted nums and subtract array length from current index and 1 (basically count numbers to the right of the index)
// create a new array, loop through the original array, and push the value from the map using the current nums value

const smallerNumbersThanCurrent = (nums) => {
    const order = [...nums].sort((a, b) => b - a), smallerCount = new Map();
    let result = [];

    for(let i = 0; i < order.length; i++) smallerCount.set(order[i], order.length - i - 1);
    for(let i = 0; i < nums.length; i++) result.push(smallerCount.get(nums[i]));

    return result
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3])) // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6,5,4,8])) // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7,7,7,7])) // [0,0,0,0]


// other solutions
const smallerNumbersThanCurrent = (nums) => {
    let sorted = nums.slice().sort((a,b) => a - b), result = [];
    
    for(let i = 0; i < nums.length; i++) result.push(sorted.indexOf(nums[i]));
    
    return result;
}

//

const smallerNumbersThanCurrent = (nums) => {
    const map = new Map(
        [...nums]
            .sort((a, b) => b - a)
            .map((val, idx) => [val, nums.length - idx - 1]),
    );
    return nums.map(n => map.get(n));
};

//

const smallerNumbersThanCurrent = (nums) => {
    const sorted = [...nums].sort((a, b) => a - b);

    return nums.map((value) => sorted.indexOf(value));
};
