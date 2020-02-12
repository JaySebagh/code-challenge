// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

let isUgly = function(num){
    // try to divide by 5, keep doing till you can't
    // do same thing with 3 and 2
    // if there is a remainder, return false
    
    if(num === 0) return false
    if(num === 1) return true
    
    while(num != 0){
        if(num === 2 || num === 3 || num === 5){
            return true
        } else if(Number.isInteger(num/5)){
            num = num/5
        } else if (Number.isInteger(num/3)){
            num = num/3
        } else if (Number.isInteger(num/2)){
            num = num/2
        } else {
            return false
        }
    }
    
    return true
}


_____________________________________________________________________________

Other people's solutions:
_____________________________________________________________________________

let isUgly = function(num) {
    if(num <= 0) return false;
    if(num === 1 || num === 2 || num === 3 || num === 5) return true;
    if(num % 2 === 0) return isUgly(num/2);
    else if(num % 3 === 0) return isUgly(num/3);
    else if(num % 5 === 0) return isUgly(num/5);
    else return false;
};
_____________________________________________________________________________

let isUgly = function(num) {
  for (var p of [2, 3, 5])
      while (num && num % p == 0)
          num /= p;
  return num == 1;
}
