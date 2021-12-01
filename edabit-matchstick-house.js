// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436
// Step 0 returns 0 matchsticks.
// The input (step) will always be a non-negative integer.
// Think of the input (step) as the total number of houses that have been connected together.

function matchHouses(step) {
	// if step is 0 return 0
	if(step === 0) return 0
	// if step > 0 return 5(step-1) + 6
	if(step > 0) return 5*(step-1)+6
}
