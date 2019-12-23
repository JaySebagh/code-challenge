// You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

// Define a pair (u,v) which consists of one element from the first array and one element from the second array.

// Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

// Example 1:

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]] 
// Explanation: The first 3 pairs are returned from the sequence: 
//              [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

// Example 2:

// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [1,1],[1,1]
// Explanation: The first 2 pairs are returned from the sequence: 
//              [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
 
var kSmallestPairs = function(nums1, nums2, k) {
    // sort the arrays, make sure to take into account 10 (javascript's way of sorting ints)
    // loop through arrays creating new array holding sum of numbers
    // sort the array
    // return the first k pairs
    
    let sums = [];
    
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            sums.push([nums1[i], nums2[j]]);
        }
    }
    
    let sortedSums = sums.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
    
    let kPairs = sortedSums.splice(0, k)
    return kPairs
};
