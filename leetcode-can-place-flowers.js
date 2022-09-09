// https://leetcode.com/problems/can-place-flowers/

// brainstorm/sudo code
// loop through the flowerbed
// check if the next 2 values are 0
// if they are, replace the second one with 1 and increment counter
// check if counter === input

const canPlaceFlowers = function(flowerbed, num) {
    let placedFlowers = 0;
    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1){
            flowerbed[i] = 1
            placedFlowers++
        }
    }
    return placedFlowers >= num
};

console.log(canPlaceFlowers([1,0,1,0,1,0,1], 0)) // true
console.log(canPlaceFlowers([0,0,1,0,0], 1)) // true
console.log(canPlaceFlowers([1,0,0,0,1], 1)) // true
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2)) // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)) // false
console.log(canPlaceFlowers([1,0,0,0,0,1], 2)) // false

// other solutions

// no mutations
const canPlaceFlowers = function(flowerbed, num) {
    let current = 0;
    const size = flowerbed.length;
    
	for(let i = 0; i <= size; i++) {
		if(i < size && flowerbed[i] === 0){
			current++;
			if (i === 0) current++;
			if (i === size - 1) current++;
		} else {
			num -= Math.trunc((current - 1) / 2);
			if (num <= 0) return true;
			current = 0;
		}
	}
    
	return false;
};

// same as my method but without mutation

canPlaceFlowers = function(flowerbed, num) {
    let previous
    let next
    let current
    
    for(let i = 0; i < flowerbed.length; i++){
        previous = flowerbed[i - 1]
        current = flowerbed[i]
        next = flowerbed[i + 1]
        // here we take advante of previous and next being falsy values when they are outside of the array or when they are equal to zero
        if(!previous && !current && !next){
            flowerbed[i] = 1
            num--
			//early return optimization
            if(num === 0) return true
        }
    }
    
    return n <= 0
};
