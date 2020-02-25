// Given an integer array, sort the integers in ascending order by the number of 1's in their binary representation
// In case of two or more integers have the same number of 1's, sort them in ascending order.

// Return the sorted array.

let sortByBits = function(arr) {
    // convert numbers to binary numbers and remove the 0s
    // sort the binary numbers by size then by value
    // convert the original arr to follow the reorder
    
    
    // convert each number into array containing the original number and the 1s from the binary version
    let toBinary = arr.map(n => [n, parseInt(n.toString(2).replace(/0/g, ''))]);
    // sort the array of arrays ascending by 1s then ascending by the original number
    let sortBinary = toBinary.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    // variable to hold the sorted numbers
    let sorted = [];
    // grab the first value of each 'array' (pair) and push to sorted
    let getNumFromSortBinary = sortBinary.forEach(v => sorted.push(v[0]));
    return sorted;
}

_______________________________________________________________________________________________________________________
Other People's Solutions:
_______________________________________________________________________________________________________________________
return arr.sort((a,b) => a.toString(2).replace(/0/g,"").length - b.toString(2).replace(/0/g,"").length || a - b);
_______________________________________________________________________________________________________________________
let getBitNumber = function (num) {
    let count = 0;
    while(num > 0) {
        count += num & 1;
        num >>= 1;
    }
    return count;
};


let sortByBits = function(arr) {
    arr.sort((a, b) => a - b);
    var tmp = {};
    for(let i = 0; i < arr.length; i += 1) {
        let curr = getBitNumber(arr[i]);
        tmp[curr] = tmp[curr] || [];
        tmp[curr].push(arr[i]);
    }
    let u = 0;
    for(let key in tmp) {
        let curr = tmp[key];
        for(let i = 0; i < curr.length; i += 1) {
            arr[u] = curr[i];
            u += 1;
        }
    }
    return arr;
};
_______________________________________________________________________________________________________________________
