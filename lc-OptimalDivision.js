// Given a list of positive integers, the adjacent integers will perform the float division. For example, [2,3,4] -> 2 / 3 / 4.

// However, you can add any number of parenthesis at any position to change the priority of operations.
// You should find out how to add parenthesis to get the maximum result, and return the corresponding expression in string format.
// Your expression should NOT contain redundant parenthesis.

let optimalDivision = function(nums) {
    // return LargestNum/(division of other nums)
    
    // test case for 1 number
    if(nums.length === 1) return `${nums[0]}`
    // test case for 2 numbers
    if(nums.length === 2) return `${nums[0]}/${nums[1]}`
    // variable removes and holds the first number
    let largest = nums.shift()
    // variable joins the other numbers together, separated by '/'
    let otherNums = nums.join('/')
    // return the largest number divided by the division of the rest
    return `${largest}/(${otherNums})`
}


Other people's solutions:
// same thing I did except in 1 line instead of 3.
let optimalDivision = function(nums) {
    if (nums.length === 1) return `${nums[0]}`
    if (nums.length === 2) return `${nums[0]}/${nums[1]}`
    return `${nums[0]}/(${nums.slice(1).join('/')})`
}
