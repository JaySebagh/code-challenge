// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

let findRelativeRanks = function(nums) {
    // sort the array from biggest to smallest
    // convert first 3 to gold/silver/bronze, then +1 for the rest
    // apply converted array to original array
    
    let sorted = nums.slice().sort((a, b) => (b - a))
    let awards = []
    
    for(i in nums){
        const index = sorted.indexOf(nums[i])
        if(index === 0){
            awards.push('Gold Medal')
        } else if(index === 1){
            awards.push('Silver Medal')
        } else if(index === 2){
            awards.push('Bronze Medal')
        } else {
            awards.push((index + 1).toString())
        }
    }
    
    return awards
}
