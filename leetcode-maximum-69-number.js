// https://leetcode.com/problems/maximum-69-number/

// brainstorm/sudo code
// convert to a string
// find the index of the first 6
// if there is no first index then return the original number
// convert string to array
// replace value in array at index of first six
// join the array
// convert to a number
// return number

const maximum69Number = (num) => {
    const convert = num.toString(), findSix = convert.indexOf("6")
    
    if(findSix === -1) return num;
    
    let arr = convert.split("");
    
    arr[findSix] = "9";
    
    const revert = arr.join("");
    
    return Number(revert);
};

console.log(maximum69Number(9669)); // 9969
console.log(maximum69Number(9996)); // 9999
console.log(maximum69Number(9999)); // 9999


// other solutions

const maximum69Number = num => Number(num.toString().replace('6', '9'));

//

const maximum69Number = num => {
    if(num / 1000 << 0 === 6) return num + 3000;
    if((num / 100 << 0) % 10 === 6) return num + 300;
    if(num % 100 / 10 << 0 === 6) return num + 30;
    if(num % 10 === 6) return num + 3;
    
    return num;
};
