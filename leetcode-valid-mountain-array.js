// https://leetcode.com/problems/valid-mountain-array/

// brainstorm/sudo code
// if the array length is less than 3 return false
// loop through the array
// check if the next number is bigger than the current number
// if it is equal return false
// if it isnt then start checking if the next number is smaller
// if it is equal or greater then return false
// return true

const validMountainArray = function(mtn) {
    if(mtn.length < 3 || mtn[0] > mtn[1]) return false
    
    let direction = 0;
    
    for(let i = 0; i < mtn.length - 1; i ++){
        const curr = mtn[i], next = mtn[i + 1];
        
        if(curr === next) return false
        
        if(direction === 0){
            if(curr > next) direction = 1;
        } else {
            if(curr < next) return false
        }
    }

    return direction === 1
};

console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0])) //f
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9])) //f
console.log(validMountainArray([2,1])) //f
console.log(validMountainArray([3,5,5])) //f
console.log(validMountainArray([0,3,2,1])) //t


// other solutions

const validMountainArray = function(mtn) {
    const len = mtn.length;
    
    if (len < 3) return false;
    
    let i = 1, rise = false, drop = false;
    
    while (mtn[i - 1] < mtn[i]) {
        i++;
        rise = true;
    }
    
    if (mtn[i - 1] === mtn[i]) return false;
    
    while (mtn[i - 1] > mtn[i]) {
        i++;
        drop = true;
    }
    
    return i === len && rise && drop;
};
