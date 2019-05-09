// Write a "for" loop that console.log()'s the "zeroeth"
// value in the unimaginitiveArray, and thereafter every
// third value of the unimaginativeArray, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.
// What is "zeroeth"? Has the word "first" become
// ambiguous now that I am a computer scientist? (Hint: yes).

const unimaginativeArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// empty array
let nums = []
// for loop based off unimaginativeArray length, += 3 to ge every 3rd value
for(let i = 0; i < unimaginativeArray.length; i += 3) {
// add number at the position to the nums array
  nums = nums + unimaginativeArray[i];
}

console.log(nums)

const nameArray = [ 'Jacquelynn', 'Csaba', 'Ellen', 'Moises', 'Cole', 'Jeff', 'Dre\'Sean' ];
// Write a console.log() that displays the last value in
// nameArray. Use the `.length` property of array's
// to access the last value. What's going on with that
// slash in Dre'Sean's name?

let lastname = nameArray[nameArray.length - 1]

console.log(lastname)

// slash in the name allows the apostrophe