// Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value

function toBinaryString(number){
    let convert = parseInt(number, 10).toString(2);
    return convert
}

const answer = toBinaryString(16);
console.log(answer);