// We have a collection of rocks, each rock has a positive integer weight.

// Each turn, we choose the two heaviest rocks and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

//     If x == y, both stones are totally destroyed;
//     If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.

// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)


// Example 1:
// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.



// sort the array of stones
// reverse it so it's largest to smallest weights
// if the first two are equal weights, remove them from the array
// if they aren't equal, push the substraction of [0] and [1] then remove from array

var lastStoneWeight = function(stones) {
    // variable holding input array
    let sorted = stones
    // variables x and y to make it easier to read
    let x = 0
    let y = 0
    // while we have more than one stone in the array, loop
    while(stones.length > 1){
        // sort the array and reverse it, .sort() itself doesn't work because of the way javascript handles number sorting.
        sorted.sort(function(a,b){return a - b}).reverse()
        // set x and y to be the 2nd and 1st numbers
        x = sorted[1]
        y = sorted[0]
        // if x is equal to y, remove them
        if(x === y){
            sorted.splice(0, 2)
        // if not, push y-x then remove y and x
        } else {
            sorted.push(y - x)
            sorted.splice(0,2);
        }
    }
    // return last stone weight
    return sorted
}
