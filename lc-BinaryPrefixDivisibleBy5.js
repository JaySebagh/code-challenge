// Given an array A of 0s and 1s, consider N_i: the i-th subarray from A[0] to A[i] interpreted as a binary number (from most-significant-bit to least-significant-bit.)

// Return a list of booleans answer, where answer[i] is true if and only if N_i is divisible by 5.

var prefixesDivBy5 = function(A) {
    // works for almost every case except extremely large ones for some reason
    // Input: [1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1]
    // Output:  [false,false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    //Expected: [false,false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,fals
  
    // convert the numbers into 'binary' (not actual binary conversion)
    // convert binary to base-10
    // check if numbers are divisible by 5
    
    let nums = A;
    
    let binaryArr = [];
    
    for(let i = 0; i < nums.length; i++){
        let split = nums.slice(0, i + 1).join('');
        let convert = parseInt(split, 2);
        let bool = convert % 5 === 0 ? true : false;
        binaryArr.push(bool);
    }
    
    return binaryArr;
};


_____________________________________________________
Other people's solution:
_____________________________________________________
var prefixesDivBy5 = A => {
  let num = 0
  let res = []
  
  for (const d of A) {
    num = (num * 2 + d) % 5;
    res.push(!num)
  }
  
  return res
};
_____________________________________________________
var prefixesDivBy5 = function(A) {
  let lsd = 0;
  return A.map((bit) => {
    lsd <<= 1;
    lsd += bit;
    lsd %= 10;
    return lsd === 0 || lsd === 5;
  });
};
_____________________________________________________
