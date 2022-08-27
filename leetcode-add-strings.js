// https://leetcode.com/problems/add-strings/

// solutions

const addStrings = (num1, num2) => {
    if(num2.length > num1.length) return addStrings(num2, num1);
    
    let i = num1.length - 1;
	  let j = num2.length - 1;
    let out = '';
    let carry = 0;
    
    while(i >= 0) {
        const digit1 = num1.charAt(i) - '0';
        const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
        
        let sum = carry + digit1 + digit2;
        carry = 0;
        if(sum > 9) {
            carry = 1;
            sum %= 10;
        }
        
        out = `${sum.toString()}${out}`;
        
        i -= 1;
        j -= 1;
    }
    
    if(carry > 0) out = `${carry.toString()}${out}`;
    
    return out;
};

//

addStrings = function(num1, num2) {
    const n = num1.length;
    const m = num2.length;
    
    let i = n - 1; // index for num1
    let j = m - 1; // index for num2
    
    let res = "";
    let carry = 0;
    
    while (i >= 0 || j >= 0) {
        const dig1 = i < 0 ? 0 : parseInt(num1.charAt(i));
        const dig2 = j < 0 ? 0 : parseInt(num2.charAt(j));
        
        const sum = dig1 + dig2 + carry;
        const dig3 = sum % 10;
        carry = Math.floor(sum / 10);
        
        res = dig3 + res;
        i--;
        j--;
    }
    
    if (carry == 1) res = carry + res;
    
    return res;
};

//

const addStrings = function(num1, num2) {
    const dict = {
        '' : 0,
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
    }

    let sum = ''
        len1 = num1.length
        len2 = num2.length
        carry = 0;

    while(len1 > 0 || len2 > 0 || carry) {
        num1Digit = dict[num1.charAt(len1-1)]; // read num1 last digit
        num2Digit = dict[num2.charAt(len2-1)]; // read num2 last digit
        len1--; // reduce lengths
        len2--;
        
        digitTotal = num1Digit + num2Digit + carry; // do sum with carry
        carry = digitTotal > 9 ? parseInt(digitTotal/10) : 0; // update carry if > 9
        digitToAppend = (digitTotal > 9 ? digitTotal%10 : digitTotal) + '';
        sum = digitToAppend + sum; // append to existing string into first position
    } 

    return sum;
};
