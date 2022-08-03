// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// brainstorm
    // loop through the roman numeral
    // convert each symbol into the corresponding value
    // check both the current and next symbol to see if substraction is necessary
    // calculate the sum


// non functional/incomplete
const romanToInt = function(string) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    
    let conversionArr = [0];

    for (i in string){
        const key = string.charAt(i);
        conversionArr.push(values[key])
    }

    let mathConversion = conversionArr.reduce((a, b, c, d) => {
            let calculation = a;
            if(d[c + 1] > b){
                console.log(d[c + 1] - b)
                const sub = d[c + 1] - b
                a + sub
            } else {
                console.log(a+b)
                a + b
            }
            // return calculation
            // console.log(calculation, "here")
        }
    );

    console.log(mathConversion)
};

console.log(romanToInt("XIV"))

// other solutions
symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

const romanToInt = function(string) {
    value = 0;
    for(let i = 0; i < string.length-1; i++){
        // if current number is smaller than the next value, subtract, else add
        symbols[string[i]] < symbols[string[i+1]] ? value -= symbols[string[i]]: value += symbols[string[i]]
    }
    // add the last number of the string to the value since there is no additional numbers after
    return value + symbols[string[string.length-1]];
};

console.log(romanToInt("XXIV"))
