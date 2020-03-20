// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

const addDigits = function(num) {
    // if num === single digit, return num
    if(num.toString(10).length === 1) return num
    // while num !== single digit, add the digits together and replace num
    while(num.toString(10).length !== 1){
        num = Array.from(num.toString()).map(Number).reduce((a, b) => a + b)
    }
    return num
}

___________________________________________
Other people's submissions:

const addDigits = function(num) {
    return (num % 9 === 0) ? 9 : num % 9
}
___________________________________________
