// https://leetcode.com/problems/height-checker/

// brainstorm/sudo code
// spread the array and sort it
// loop through the original array and check if the number at the index matches the number at the index of the spreaded array
// if it does not match then increment a counter

const heightChecker = function(heights) {
    let sorted = [...heights].sort((a, b) => a - b), counter = 0;
    
    for(let i = 0; i < heights.length; i++) if(heights[i] !== sorted[i]) counter++
    
    return counter
};

console.log(heightChecker([1,1,4,2,1,3])) // 3
console.log(heightChecker([5,1,2,3,4])) // 5
console.log(heightChecker([1,2,3,4,5])) // 0


// other solutions
const heightChecker = (heights) => {
    const sorted = [...heights].sort((a,b) => a-b)
    return heights.reduce((total,_,index) =>  sorted[index] !== heights[index] ? total + 1 : total,0)
}
