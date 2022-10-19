// https://leetcode.com/problems/sort-array-by-parity-ii/

// brainstorm/sudo code
// loop through nums
// push the num to even or odd array
// loop through the length of nums
// push to new array even or odd number based on if index is even or odd

const sortArrayByParityII = function(nums) {
    let even = [], odd = [], sort = [], evenIndex = 0; oddIndex = 0;
    
    for(let num of nums) num % 2 === 0 ? even.push(num) : odd.push(num)
    
    for(let i = 0; i < nums.length; i++){
        if(i % 2 === 0){
            sort.push(even[evenIndex])
            evenIndex++
        } else {
            sort.push(odd[oddIndex])
            oddIndex++
        }
    }

    return sort
};

console.log(sortArrayByParityII([4,2,5,7])) //[4,7,2,5] [2,5,4,7] [2,7,4,5]


// other solutions

const sortArrayByParityII = function(nums) {
    let result = new Array(nums.length);
    
    for(let i = 0, even = 0, odd = 1; i < nums.length; i ++) {
        if(nums[i] % 2 === 0) {
            result[even] = nums[i];
            even += 2;
        } else {
            result[odd] = nums[i];
            odd += 2;
        }
    }
    return result;
};

//

const sortArrayByParityII = function(nums){
    let evenArray = A.filter(x => x % 2 === 0);
    let oddArray = A.filter(x => x % 2 === 1);
    return A.map((x, index) => index % 2 === 0 ? evenArray.pop() : oddArray.pop());
}
