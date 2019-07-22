// Return the missing number in an array of numbers between 1 and 10

// Example:
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) --> 5
// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) --> 10

function missingNum(arr) {
    arr = arr.sort(function(a,b){
    return a-b;
  });
  const completeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for(let i = 0; i < completeArr.length; i++){
    if(completeArr[i] !== arr[i]){
      return completeArr[i]
    }
  }
}

const answer = missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]);
console.log(answer)
