// Given two integers tomatoSlices and cheeseSlices. The ingredients of different burgers are as follows:

//     Jumbo Burger: 4 tomato slices and 1 cheese slice.
//     Small Burger: 2 Tomato slices and 1 cheese slice.

// Return [total_jumbo, total_small] so that the number of remaining tomatoSlices equal to 0 and the number of remaining cheeseSlices equal to 0. If it is not possible to make the remaining tomatoSlices and cheeseSlices equal to 0 return [].

// Example 1:
// Input: tomatoSlices = 16, cheeseSlices = 7
// Output: [1,6]
// Explantion: To make one jumbo burger and 6 small burgers we need 4*1 + 2*6 = 16 tomato and 1 + 6 = 7 cheese. There will be no remaining ingredients.

// Example 2:
// Input: tomatoSlices = 17, cheeseSlices = 4
// Output: []
// Explantion: There will be no way to use all ingredients to make small and jumbo burgers.

// Example 3:
// Input: tomatoSlices = 4, cheeseSlices = 17
// Output: []
// Explantion: Making 1 jumbo burger there will be 16 cheese remaining and making 2 small burgers there will be 15 cheese remaining.

// Example 4:
// Input: tomatoSlices = 0, cheeseSlices = 0
// Output: [0,0]

// Example 5:

// Input: tomatoSlices = 2, cheeseSlices = 1
// Output: [0,1]

var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    // if there are no ingredients, return [0, 0]
    // if there aren't at least 2 tomato slices, return []
    // check if the tomatoes are divisable by 2
        // if it's not, return []
    
    // no matter what, each burger requires 1 slice of cheese
    // at minimum, each burger requires 2 slices of tomatoes
    // check if the tomatoes are at least double the amount of cheese slices
        // if it's not, return []
    
    // distribute all the tomatos (by 2) until there are no more cheese slices
    // distriburte an additional 2 slices until none are left
    
    
  
    // array to hold answer
    totalBurgers = []
    // variables to hold number of small and jumbo burgers
    let jumboBurgers = 0
    let smallBurgers = 0
    
    // making sure we have ingredients
    if((tomatoSlices && cheeseSlices) === 0){
        return [0, 0]
    }
    
    // checking if we have more than 2 tomatoSlices, if num of tomatoSlices is even, if we have enough tomatoes for cheese
    if(tomatoSlices < 2 || tomatoSlices % 2 || cheeseSlices * 2 > tomatoSlices){
        return []
    }
    
    // while we have cheeseSlices, distribute smallBurgers
    for(let i = 0; cheeseSlices > 0; i++){
        cheeseSlices -= 1
        tomatoSlices -= 2
        smallBurgers += 1
    }
    
    // while we have tomatoSlices, distribute 2 additional slices to each burger (making sure to substract from smallBurgers and add to jumboBurgers).
    for(let i = 0; tomatoSlices > 0; i++){
        // condition to make sure we have enough smallBurgers to change into largeBurgers (or else it goes into negative)
        if(smallBurgers === 0){
            return []
        }
        tomatoSlices -= 2
        smallBurgers -= 1
        jumboBurgers += 1
    }
    
    // push our burgers to the answers array
    totalBurgers.push(jumboBurgers, smallBurgers)
    
    return totalBurgers
};
