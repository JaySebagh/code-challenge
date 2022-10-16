// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/

// brainstorm/sudo code
// get the length of the array and calculate 25% of the size
// loop through the array and count the number until the next number is different
// if the count is greater than 25% return it

const findSpecialInteger = (arr) => {
    if(arr.length === 1) return arr[0]
    
    const quarter = arr.length / 4
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        count++;
        if(count > quarter) return arr[i];
        if(arr[i] !== arr[i + 1]) count = 0;
    }
};

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))
// len = 9 | 9/4 = 2.25 | 6 appears more than 2.25 times
console.log(findSpecialInteger([1,1,2,2,3,3,3,3])) // 3
console.log(findSpecialInteger([1,2,3,3])) // 3


// other solutions

// sliding window
const findSpecialInteger = (arr) => {
    const ws = Math.floor(arr.length / 4);
    for(let i = 0; i < arr.length - ws; i++){
        if(arr[i] === arr[i + ws]){
            return arr[i];
        }
    }
    return -1;
};

//

const findSpecialInteger = (arr) => {
    let candidate;
    let counter = 0;
    
    arr.forEach(n => {
        if(counter === 0 || counter === 1) candidate = n;
        counter += n === candidate ? 3 : -1;
    });
    return candidate;
};
