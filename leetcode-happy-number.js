// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
//     Starting with any positive integer, replace the number by the sum of the squares of its digits.
//     Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//     Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// not sure how to detect if function will cause infinite loop which should return false instead
const isHappy = function(num) {
    const splitNum = num.toString().split("");
    const digitsArr = splitNum.map(num => Math.pow(Number(num), 2));
    const sumOfArr = digitsArr.reduce((a, b) => a + b);
    if(sumOfArr === 1) return true;
    return isHappy(sumOfArr)
};

console.log(isHappy(2));

// other solutions

const isHappy = n => {
  if (n === 1) return true;
  
  let tortoise = n, hare = getNext(n);
  while (hare !== 1 && tortoise !== hare) {
    tortoise = getNext(tortoise);
    hare = getNext(getNext(hare));
  }
  
  return tortoise !== hare;
        
function getNext(n) {
    return (n + '').split('').map(num => (num - 0)**2).reduce((sum, num) => sum += num)
  }
}

//

const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}

const isHappy = function(n) {
    /**
	 * Not necessary I think, but the OJ algorithm appears
	 * to return false for non-positive numbers also.
	 */
    if (n < 1) return false;
	
	/**
	 * This set will store numbers as we create them.
	 * If we create a number already in the set, we
	 * assume we're in an infinite cycle.
	 */
    let set = new Set();
	
    while (!set.has(n)) {
        set.add(n);
        let s = n.toString();
        n = 0;
        for (let i = 0; i < s.length; ++i) {
            n += squares[s[i]];
        }
        if (n == 1) return true;
    }
	
    return false;
};

//

isHappy = function(n) {
    let result = n;
    const visited = {};
    const getDigits = number => `${number}`.split('').map(str => Number(str));
    
    // escape loop if result is 1
    while (result !== 1) {
        let digits = getDigits(result);
        result = digits.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
        
        // memorized visited results. it's not a happy number when revisit occurs
        if (visited[result] === undefined) {
            visited[result] = true;
        } else {
            return false
        }
    } 
    
    return true;
};

//

const isHappy = function(n) {
    function getNext(n){
        return (n+"").split("").reduce((a,c)=>Number(a)+Number(c*c), 0);
    }
    
    let slow = n;
    let fast = getNext(n);
    while(fast!=1 && slow!=fast){
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast == 1;
};

//

const isHappy = function(n) {
     let set = new Set();
     while (!set.has(n)) {
        set.add(n);
        let s = n.toString();
		n = 0;
        for (let i = 0; i < s.length; ++i) {
            n += Math.pow(+s[i],2);
        }
        if (n === 1) return true;
    }
    return false;
};
