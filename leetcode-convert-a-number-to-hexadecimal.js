// // https://leetcode.com/problems/convert-a-number-to-hexadecimal/
// // brainstorm/sudo code
// // create a map that holds kv pairs for numbers greater than 9
// // divide the number by 16, grab the remainder and mulitply it by 16
// // add that number to an array
// // divide the number by 16, and grab the whole number
// // set that number as the new number
// // loop through the array and convert the number if it's greater than 9

// // currently only functional for positive
// // for negative: https://www.youtube.com/watch?v=zC9cd9w75Nc
// const toHex = function(num) {
//     const hex = new Map();
//     let whole = num;
//     const remainders = [];
    
//     hex.set(10, "a").set(11, "b").set(12, "c").set(13, "d").set(14, "e").set(15, "f");
    
//     while(whole > 0){
//         const remain = whole / 16 % 1 * 16;
//         whole = Math.floor(whole / 16);
//         remainders.unshift(remain);
//     };

//     for(i in remainders){
//         if(remainders[i] > 9){
//             remainders[i] = hex.get(remainders[i])
//         }
//     }

//     return remainders.join("")
// };

// updated code to reflect 2s complement
// positive numbers now convert into binary then into hex
// need to work on negative numbers
    // currently binary format is still in positive format
    // need to flip the 0s and 1s then add 1
    // then convert groups of 4 into hex
// https://www.youtube.com/watch?v=tSLKOKGQq0Y
// https://www.youtube.com/watch?v=zC9cd9w75Nc
const toHex = function(num) {
    if(num === 0) return "0"
    let whole = Math.abs(num);
    let remainders = [];
    let powers = new Map();
    let convert = new Map();
    let hex = [];
    let group = [];
    let counter = 0;

    powers.set(0, 8).set(1, 4).set(2, 2).set(3, 1);
    convert.set(10, "a").set(11, "b").set(12, "c").set(13, "d").set(14, "e").set(15, "f");

    // convert to binary
    while(whole > 0){
        let remain = Math.ceil(whole / 2 % 1);
        whole = Math.floor(whole / 2);
        remainders.unshift(remain);
    }
    
    // add zeros in front of the binary number so that it can be split into groups of 4
    function appendZeros(remain){
        while(remain.length / 4 % 1 !== 0){
            remain.unshift(0);
        }
        return remain
    }
    
    appendZeros(remainders)
    
    // if the number is negative, use 2s complement
    if(num < 0){
        // flip
        for(i in remainders){
            remainders[i] = remainders[i] === 0 ? 1 : 0;
        }
        const str = remainders.join("");
        // add 1
        remainders = (parseInt(str, 2) + parseInt(1, 2)).toString(2).split("").map(Number);
        // input -10 comes back as [1, 1, 0] so we append 0 to the front
        appendZeros(remainders)
    }

    // split the array into groups of 4, get their kv from the map, and sum the values
        // convert the values into hex
    for(let i = 0; i < remainders.length; i++){
        if(remainders[i] === 0){
            counter++;
        } else {
            group.push(powers.get(counter))
            counter++;
        }
        if(counter === 4){
            let sum;
            if(group.length === 0){
                sum = 0
            } else {
                sum = group.reduce((a, b) => a + b);
            }
            if(sum > 9){
                sum = convert.get(sum);
            }
            hex.push(sum);
            group = [];
            counter = 0;
        }
    }
    hex = hex.join("")
    
    // examples show 'f' letters in front if the number is negative
    if(Math.sign(num) === 1){
        return hex
    } else {
        let letterF = "ffffffff"
        return letterF.slice(0, letterF.length - hex.length).concat(hex)
    }
}

console.log(toHex(-10)) // "fffffff6"
console.log(toHex(16)) // 10
console.log(toHex(-54)) // ffffffca
console.log(toHex(26)) // "1a"
console.log(toHex(-746)) // [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0] // "fffffd16"
console.log(toHex(746)) // [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0] // "2ea"
console.log(toHex(-1)) // "ffffffff"
console.log(toHex(479)) // "1df"
