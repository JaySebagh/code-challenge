// https://leetcode.com/problems/container-with-most-water/

// brainstorm/sudo code
// (1, 8)
// (8, 7)

// of the right side 8 and 7 the smaller one is 7
// of the left side subtracted is 8 - 1 = 7
// area is 7 * 7 = 49

// go through all pairs (index, height) and apply the formula above
// return the largest area

// all of them:
// (0, 1)
// (1, 8)
// (2, 6)
// (3, 2)
// (4, 5)
// (5, 4)
// (6, 8)
// (7, 3)
// (8, 7)

// poor performance due to double loop
const maxArea = (height) => {
    let largest = 0;
    
    for(let i = 0; i < height.length; i++){
        let curr = height[i];
        
        for(let j = 1; j < height.length; j++){
            let next = height[j];
            //(1, 8) --> (i, curr)
            //(8, 7) --> (j, next)
            // right smaller is 7 --> compare curr and next
            // left subtracted is 8-1 = 7 --> j - i
            // 7*7 = 49
            const right = Math.min(curr, next), left = (j - i), area = right * left
            
            area > largest ? largest = area : largest = largest;
        }
    }

    return largest
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49
console.log(maxArea([1,1])) // 1



// other solutions

// two pointers
const maxArea = (height) => {
	let left = 0, right = height.length - 1, largest = 0;

	while(left < right) {
        // (1, 8)
        // (8, 7)
        // first part is same as comparing the right side and grabbing the smallest
        // second part is same as subtracting the indexes on the left side (i and j)
		let area = Math.min(height[left], height[right]) * (right - left);
        
		largest = Math.max(area, largest)
        // keep going as long as the right side height is bigger
		height[left] < height[right] ? left++ : right--
	}
    
	return largest
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49
