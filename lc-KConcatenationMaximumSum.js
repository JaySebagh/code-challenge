// NOT WORKING RIGHT NOW


// Given an integer array arr and an integer k, modify the array by repeating it k times.

// For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2].

// Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be 0 and its sum in that case is 0.

// As the answer can be very large, return the answer modulo 10^9 + 7.

let kConcatenationMaxSum = function(arr, k) {
    // sum the array
    // multiply the sum of the array by k
    // edge case empty array: return 0
    
//     let sum = 0;
    
//     if(arr.length === 0) return 0
    
//     if(!arr.some(num => num > 0)) return 0
    
//     if(arr.some(num => num < 0)){
//         for(i in arr){
//             if(Math.sign(arr[i]) === -1){
//                 arr[i] = '-'
//             }
//         }
        
//         let biggest = arr.concat(arr).join('').split('-').sort((a, b) => b - a)[0]
//         let maxSum = biggest.split('').map(num => +num).reduce((a, b) => a + b)
//         return maxSum
//     } else {
//         sum = arr.reduce((a, b) => a + b)
//     }
//     return sum * k
    
    if(arr.length === 0) return 0
    
    if(!arr.some(num => num > 0)) return 0
    
    let repeat = Array(k).fill(arr)
    let modArr = repeat.slice().flat()
    console.log(repeat)
}
