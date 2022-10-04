// https://leetcode.com/problems/positions-of-large-groups/

// brainstorm/sudo code
// loop through string
// mark Start as index
// check if next matches current
// if it doesn't then mark End
// add Start and End as pair in an answers array if it is greater than 2

const largeGroupPositions = function(str) {
    let start = 0, end, largest = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            end = i + 1;
            if (end - start > 2) largest.push([start, end - 1]);
            start = i + 1;
        }
    }

    return largest
};

console.log(largeGroupPositions("abcdddeeeeaabbbcd")) // [[3,5],[6,9],[12,14]]
console.log(largeGroupPositions("abc")) // []
console.log(largeGroupPositions("abbxxxxzzy")) // [[3,6]]


// other solutions

const largeGroupPositions = function(str) {
    let index = [0, 0], res = [];
    
    for(let i = 0; i < str.length; i++){
        if(i === str.length - 1 || str[i] !== str[i + 1]){
            index[1] = i;
            if(index[1] - index[0] >= 2) res.push(index);
            index = [i + 1, i + 1];
        }
    }
    
    return res;
};

//

const largeGroupPositions = function(str) {
    let i = 0, j = 0, res = []
    
    while(i < str.length){
        j = i;
        while(j < str.length && str.charAt(i) == str.charAt(j)) j++;
        if(j - i > 2) res.push([i, j - 1]);
        i = j;
    };
    
    return res
};
