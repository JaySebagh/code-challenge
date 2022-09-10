// https://leetcode.com/problems/maximum-product-of-three-numbers/

// brainstorm/sudo code
// sort array regardless of positive or negative
// grab the 3 biggest and return the product

const maximumProduct = function(nums) {
    let pos = [], neg = [];
    for (let num of nums) {
        Math.sign(num) === 1 ? pos.push(num) : neg.push(num);
    };
    pos.sort((a, b) => a - b)
    neg.sort((a, b) => a - b)
    // const order = nums.sort((a, b) => Math.abs(a) - Math.abs(b))
    // const positive = nums.
    // const lastTwo = Math.sign(order[nums.length - 1] * order[nums.length - 2])
    // console.log(lastTwo)
    // .slice(nums.length - 3).reduce((a, b) => a * b)
};

// console.log(maximumProduct([-10, -5, -1, 2, 3, 4])) // -10*-5*4 = 200
console.log(maximumProduct([-100, -2, -3, 1])) // [1, -2, -3, -100]// 300


// other solutions

const maximumProduct = function(nums) {
    let order = nums.sort((a, b) => a - b)
    let product1 = order[0] * order[1] * order[nums.length - 1]
    let product2 = order[nums.length - 1] * order[nums.length - 2] * order[nums.length - 3]
    return Math.max(product1, product2)
};

// same but shorter

const maximumProduct = function(nums) {
    let order = nums.sort((a, b) => b - a)
    return Math.max(order[0] * order[1] * order[2], order[order.length - 1] * order[order.length - 2] * order[0])
};

