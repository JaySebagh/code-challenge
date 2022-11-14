// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

// brainstorm/sudo code
// get the largest number in the array
// loop through the array
// check if the current value + extra candies is greater than the largest number
// if it is, push true to a new array
// if it isn't, push false

const kidsWithCandies = (candies, extraCandies) => {
    const largest = candies.reduce((a, b) => Math.max(a, b));
    let check = [];
    
    for(let count of candies) check.push(count + extraCandies >= largest ? true : false)

    return check
};

console.log(kidsWithCandies([2,3,5,1,3], 3)) // [true,true,true,false,true] 
console.log(kidsWithCandies([4,2,1,1,2], 1)) // [true,false,false,false,false] 
console.log(kidsWithCandies([12,1,12], 10)) // [true,false,true]


// alternative method

// brainstorm/sudo code
// get the largest number in the array
// if extraCandies is smaller than the largest number, subtract them
    // this gives us the minimum candy amount needed to be the largest
// loop through the array, if the number is equal or greater, push true else false

const kidsWithCandies = (candies, extraCandies) => {
    const largest = candies.reduce((a, b) => Math.max(a, b)), minSize = largest - extraCandies;
    let check = []
    
    for(let count of candies) check.push(count >= minSize ? true : false)

    return check
}

console.log(kidsWithCandies([2,3,5,1,3], 3)) // [true,true,true,false,true] 
console.log(kidsWithCandies([4,2,1,1,2], 1)) // [true,false,false,false,false] 
console.log(kidsWithCandies([12,1,12], 10)) // [true,false,true]
