// https://leetcode.com/problems/largest-number-at-least-twice-of-others

// brainstorm/sudocode
// sort array
// grab 2 biggest numbers
// check if biggest is double previous

const dominantIndex = function(nums) {
    const sorted = [...nums].sort((a, b) => b - a)
    return sorted[0] >= sorted[1] * 2 ? nums.indexOf(sorted[0]) : -1
};

console.log(dominantIndex([0, 0, 0, 1])) // 3
console.log(dominantIndex([3, 1, 6, 0])) // 2


// other solutions

const dominantIndex = function(nums) {
    let first = -Infinity, second = -Infinity, ans = 0;

    for(let i = 0; i < nums.length; i++){
        if (nums[i] > first) {
            [second, first, ans] = [first, nums[i], i];
        } else if(nums[i] > second){
            second = nums[i];
        }
    }

    return first >= second * 2 ? ans : -1;
};

//

const dominantIndex = function(nums) {
    const maxInt = Math.max(...nums);
    const minIntMustBe = maxInt / 2;
    const intFound = nums.find(num => num !== maxInt && num > minIntMustBe);
    return intFound ? -1 : nums.indexOf(maxInt);
};

