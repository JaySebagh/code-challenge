// Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
	// set a counter
	let counter = 0
	// loop through array
	for(let i = 0; i < arr.length; i++){
		// if array at position i is true
		if(arr[i] === true){
			// increment counter
		  counter++
		}
	}
	return counter
}

// other user solutions

// solution 1
// const countTrue = r => r.filter(Boolean).length

// solution 2
// return arr.filter(x=>x==true).length
