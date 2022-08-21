// https://leetcode.com/problems/convert-a-number-to-hexadecimal/

// brainstorm/sudo code
// create a map that holds kv pairs for numbers greater than 9
// divide the number by 16, grab the remainder and mulitply it by 16
// add that number to an array
// divide the number by 16, and grab the whole number
// set that number as the new number
// loop through the array and convert the number if it's greater than 9

// currently only functional for positive
// for negative: https://www.youtube.com/watch?v=zC9cd9w75Nc
const toHex = function(num) {
    const hex = new Map();
    let whole = num;
    const remainders = [];
    
    hex.set(10, "a").set(11, "b").set(12, "c").set(13, "d").set(14, "e").set(15, "f");
    
    while(whole > 0){
        const remain = whole / 16 % 1 * 16;
        whole = Math.floor(whole / 16);
        remainders.unshift(remain);
    };

    for(i in remainders){
        if(remainders[i] > 9){
            remainders[i] = hex.get(remainders[i])
        }
    }

    return remainders.join("")
};

console.log(toHex(26)) // "1a"
console.log(toHex(-1)) // "ffffffff" (error)
console.log(toHex(479)) // "1df"
