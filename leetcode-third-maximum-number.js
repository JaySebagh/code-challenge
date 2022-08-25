// https://leetcode.com/problems/third-maximum-number/
// brainstorm/sudo code
// loop through array
// add numbers to set
// return set as array
// sort array and reverse
// if the number at index 2 exists return it else return number at index 0

const thirdMax = function(nums) {
    let visited = new Set();
    for(num of nums) visited.add(num)
    const sortVisited = Array.from(visited).sort((a, b) => a - b).reverse()
    return sortVisited[2] !== undefined ? sortVisited[2] : sortVisited[0]
};

console.log(thirdMax([3,2,1])) // 1
console.log(thirdMax([1,2])) // 2
console.log(thirdMax([2,2,3,1])) // 1
console.log(thirdMax([3,2,1,-1,-2,-3])) // 1
console.log(thirdMax([-3,-2,-1])) // -3
console.log(thirdMax([3,3,4,3,4,3,0,3,3])) // 0

// other solutions

const thirdMax = function(nums) {
    nums = [...new Set(nums)].sort((a,b) => b-a);
    
    return (nums.length <= 2)? nums[0] : nums[2];
};

//

const thirdMax = function (nums) {
    const set = new Set(nums);
    const first = Math.max(...set);
    if (set.size < 3) return first;
    set.delete(first);
    const second = Math.max(...set);
    set.delete(second);
    return Math.max(...set);
};
