// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

 
let duplicateZeros = function(arr) {
    // loop through array
    for(let i = 0; i < arr.length; i++){
        // check if the number is 0
        if(arr[i] === 0){
            // if it is, add another zero next to it
            arr.splice(i, 0, 0)
            // remove the element in the arry
            arr.pop()
            // increment i
            i++
        }
    }
}
