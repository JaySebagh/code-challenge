// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

// brainstorm/sudo code
// find the target in the array
// if the target doesn't exist inside the array, insert it
// return the previous character of the index of target
// if there is no previous character, return the last character in the array


const nextGreatestLetter = function(letters, target) {
    const pos = letters.indexOf(target);
    
    if(pos > -1){
        return pos === 0 ? letters[letters.length - 1] : letters[pos - 1]
    } else {
        let start = 0, stop = letters.length - 1, mid = Math.floor((start + stop) / 2);
        
        while(letters[mid] != target && start < stop) {
            if(target < letters[mid]){
                stop = mid - 1;
            } else if(target > letters[mid]){
                start = mid + 1;
            }
            
            mid = Math.floor((start + stop) / 2);
        }
        
        return letters[mid]
    }
};

console.log(nextGreatestLetter(['a', 'b', 'c', 'd', 'e'], 'c'))

// other solutions

// binary search O(log(n))
const nextGreatestLetter = (letters, target) => {
    let left = 0, right = letters.length;
    
    while(left <= right){
        const mid = left + Math.floor((right - left) / 2);
        letters[mid] <= target ? left = mid + 1 : right = mid - 1;
    };

    return left === letters.length ? letters[0] : letters[left];
};

// one liner O(n)
const nextGreatestLetter = (letters, target) => {
    return letters.find(char => char > target) || letters[0];
};
