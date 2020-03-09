// Write a function:

//    function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

//        N is an integer within the range [1..100,000];
//        each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
    // sort the array from smallest to biggest number
    // loop through the array and check if the right number is +1 from the current number
    // if it isn't, return the current number + 1
    
  
    // sort the array ascending
    let sorted = A.sort((a,b) => a - b)
    // remove duplicates
    let unique = [...new Set(sorted)]
    
    // if the array does not start with 1, return 1 as that is the smallest positive integer
    if(unique[0] !== 1) return 1
    
    // loop through the array
    for(let i = 0; i < unique.length; i++){
        // check if the next number is the current number + 1
        if(unique[i] !== unique[i + 1] - 1){
            // if it isn't, return the current number + 1
            return unique[i] + 1
        }
    }
}
