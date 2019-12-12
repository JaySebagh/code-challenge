// The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

// Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

 

// Example 1:

// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)

// Example 2:

// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)

// Example 3:

// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)

var numRescueBoats = function(people, limit) {
    // loop through the array, check if people[0] + people[i] <= limit
        // if it's less than, remove them from the array and increment a counter by 1
        // if it isn't, remove from array and increment a counter by 1
    
    let counter = 0;

    for(let i = 1; people.length > 0; i++){
        // if the first one === limit, remove it and increment counter
        if(people[0] === limit){
            people.shift()
            counter += 1
        }
        // if there's only one person left, remove them and increment counter
        if(people.length === 1){
            counter += 1
            break
        }
        // if the first one + [i] is less than or equal to limit, remove them and increment counter
        if(people[0] + people[i] <= limit){
            counter += 1;
            people.splice(0, 1);
            people.splice(i-1, i);
        } else {
            // else condition for cases where [0] is not compatible with any other weights, remove it.
            let weightMatch = false
            for(let j = 2; j < people.length; j++){
                if(people[0] + people[j] < limit){
                    weightMatch = true
                }
            }
            if(weightMatch === false){
                people.shift()
                counter += 1
            }
        }
    }
    
    return counter
}
