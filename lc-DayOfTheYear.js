// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

let dayOfYear = function(date) {
    // split the date
    // create month array that holds the days in each month
    // sum all the days in the month array until the middle value in the date array
    // add the last value in the date array to the sum
    
    
    // split the date into an array of numbers
    const dateArr = date.split('-').map(x => +x)
    
    // if the month is Jan, return the day
    if(dateArr[1] === 01) return dateArr[2]
    
    // variable to hold the number of days in each month of the specified year
    const monthsToDays = []
    
    // get the number of days in a month and push it to the array
    let count = 0
    while(monthsToDays.length < 12){
        count++
        let days = new Date(dateArr[0], count, 0).getDate();
        monthsToDays.push(days)
    }
    
    // sum all the months until the month before the given month, then add the remaining days
    let days = monthsToDays.splice(0, dateArr[1] - 1).reduce((a, b) => a + b)
    return days + dateArr[2]
}
