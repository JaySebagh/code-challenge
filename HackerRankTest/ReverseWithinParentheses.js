// Write a function that reverses characters in (possibly nested) parentheses in the input string. Input strings
// will always be well-formed with matching parentheses.
// For example, given the following input string foo(bar(baz))blim , your function should
// return foobazrabblim . This results from the following steps:
// 1. Reversing the inner-most nested string baz , yielding foo(barzab)blim .
// 2. Reversing the string barzab , yielding foobazrabblim as our final string.

// Function Description
// Complete the function reverseInParentheses in the editor below. The function must return a string, the
// result of performing the appropriate reversals on sub-strings wrapped in parentheses contained within the
// input string.

// reverseInParentheses has the following parameters:
// s : an string containing well-formed parentheses

// Input Format
// A single line with the input string. 

// Sample Input:
//   foo(bar)baz(blim)boo

// Sample Output:
//   foorabbazmilbboo

/*
 * Complete the 'reverseInParentheses' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
 
function reverseInParentheses(s) {
 // loop through the string
 // look for ")"
  // loop back until "(" is found
    // reverse the string and remove "()"
    // reset loop index to 0
 
 // let end = 0;
 // let start = 0;
 // for(let i = 0; i < s.length; i++){
  // if(s[i] === ")"){
     // end = i
     // i--
     // if(s[i] === ")"){
      // start = i
      // console.log(start, end)
      // break
    // }
   // }
  // }
 
 while(s.includes("(")){
  let end = s.indexOf(")")
  let start = 0
  for(let i = end; i > 0; i--){
    if(s[i] === "("){
      start = i
      break
    }
 }

 let subS = s.substring(start + 1, end)
 let reverse = subS.split("").reverse()
 let len = end - start + 1
 let sArr = s.split("")
 sArr.splice(start, len)
 // sArr.splice(start, 0, reverse)
 sArr.splice.apply(sArr, [start, 0].concat(reverse))
 sArr = sArr.join("")
 s = sArr
}
return s
}
