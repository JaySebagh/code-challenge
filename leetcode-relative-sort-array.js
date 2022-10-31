// https://leetcode.com/problems/relative-sort-array/

// brainstorm/sudo code
// create a Map counter from arr1 that is also in arr2
// if it is not in arr2, add it to a leftover array
// loop through arr2
// create a new arr and add the value X amount of times where X is the count of the value in the map
// concat the leftover numbers

const relativeSortArray = function(arr1, arr2) {
    const secondArrSet = new Set(arr2);
    let count = new Map(), sorted = [], leftover = [];

    for(let i = 0; i < arr1.length; i++){
        secondArrSet.has(arr1[i]) ?
            count.set(arr1[i], count.get(arr1[i]) + 1 || 1) :
            leftover.push(arr1[i])
    }

    leftover.sort((a, b) => a - b)

    for(let i = 0; i < arr2.length; i++){
        sorted = [...sorted, ...Array(count.get(arr2[i])).fill(arr2[i])]
    }

    return [...sorted, ...leftover]
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
// [2,2,2,1,4,3,3,9,6,7,19]

console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]))
// [22,28,8,6,17,44]


// other solutions

const relativeSortArray = function(arr1, arr2) {
    const lookup = new Map();
    const len2 = arr2.length;
    arr2.forEach((a, i) => {
        lookup.set(a, i);
    });
    return arr1.sort((a, b) => {
        a = lookup.has(a) ? lookup.get(a) : len2 + a;
        b = lookup.has(b) ? lookup.get(b) : len2 + b;
        return a - b;
    });
};
