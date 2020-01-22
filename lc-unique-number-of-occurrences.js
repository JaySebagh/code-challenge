// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

var uniqueOccurrences = function(arr) {
// VER 1
//     let sorted = arr.sort()
    
//     let counter = 1
//     let lengthArr = []
//     for(let i = 0; i < sorted.length; i++){
//         if(sorted[i + 1] === sorted[i]){
//             counter += 1
//         } else {
//             lengthArr.push(counter)
//             counter = 1
//         }
//     }
    
//     let sortedLengthArr = lengthArr.sort()
    
//     for(let i = 0; i < sortedLengthArr.length; i++){
//         if(sortedLengthArr[i] === sortedLengthArr[i + 1]){
//             return false;
//             break;
//         }
//     }
    
//     return true;
    
    
    
// VER 2
//     let sorted = arr.sort()
    
//     let counter = 1
//     let lengthArr = []
//     for(let i = 0; i < sorted.length; i++){
//         if(sorted[i + 1] === sorted[i]){
//             counter += 1
//         } else {
//             lengthArr.push(counter)
//             counter = 1
//         }
//     }
    
//     console.log(new Set(lengthArr).size)
//     return lengthArr.length === new Set(lengthArr).size;
    
    
    
// VER 3
    let counter = {};
    
    arr.forEach(num => {
        counter[num] = (counter[num] || 0) + 1;
    });
    
    const values = Object.values(counter);

    return values.length === new Set(values).size;
}
