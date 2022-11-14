// https://leetcode.com/problems/destination-city/

// brainstorm/sudo code
// loop over the array of arrays
// grab the current index array and check if the last element matches the first element of another array
// if it does keep searching for the next one until all arrays have been checked
// if the end is reached, return the last element of the last array
// if it fails, repeat the steps with the next array

// non functional
const destCity = (paths) => {
    let clone = [...paths];
    let counter = 0;
    
    for(let i = 0; i < clone.length; i++){
        const curr = clone.splice(counter, 1)[0];
        console.log("curr", curr, "clone", clone)
        console.log(curr[1], clone[0][0])
        if(curr[1] !== clone[0][0]){
            clone = [...paths];
            counter++;
            i = -1
        } else {
            
        }
        if(clone.length === 1) return clone[0][1]
    }
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])) // "Sao Paulo"
console.log(destCity([["C","A"],["B","C"],["D","B"]])) // "A" ("D" -> "B" -> "C" -> "A")
console.log(destCity([["A","Z"]])) // "Z"



// other solutions

// using Map

// If start of path, value plus 1.
// If end of path, value minus 1.
// Most cities will be 0. Start of whole path will be 1. Destination city will be -1.

const destCity = (paths) => {
    const map = new Map();
    
    for(const path of paths){
        // add start to map, if start already visited then 0 else 1
        map.set(path[0], map.has(path[0]) ? 0 : 1);
        // add destination, if destination already visted then 0 else -1
        map.set(path[1], map.has(path[1]) ? 0 : -1);
    }

    // find the destination that hasn't been visited
    for(const item of map) if(item[1] === -1) return item[0];
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])) // "Sao Paulo"
console.log(destCity([["C","A"],["B","C"],["D","B"]])) // "A" ("D" -> "B" -> "C" -> "A")

// using Hash

const destCity = function(paths) {
    const hash = new Map(paths);
    // Map(3) {
    //   'London' => 'New York',
    //   'New York' => 'Lima',
    //   'Lima' => 'Sao Paulo'
    // }

    // check which of the destinations do not appear as start cities ("New York" appears, "Lima" appears, "Sao Paulo" does not)
    for(const destination of hash.values()) if(!hash.has(destination)) return destination;
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])) // "Sao Paulo"

// using Set

// Mark all start of paths.
// Destination city must not be in Set.

const destCity = (paths) => {
    const set = new Set();

    // add the start city [0] to the Set
    // ("London", "New York", "Lima")
    // ("C", "B", "D")
    for(const path of paths) set.add(path[0]);
    // check if the destinations are in the set
    // ("New York" true, "Lima" true, "Sao Paulo" false) return "Sao Paulo"
    // ("A" false, "C" true, "B" true) return "A"
    for(const path of paths) if(!set.has(path[1])) return path[1];
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])) // "Sao Paulo"
console.log(destCity([["C","A"],["B","C"],["D","B"]])) // "A" ("D" -> "B" -> "C" -> "A")
