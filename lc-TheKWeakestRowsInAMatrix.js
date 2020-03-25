// Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians),
// return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

// A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j,
// or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is,
// always ones may appear first and then zeros.

const kWeakestRows = function(mat, k) {
    // count soldiers in each row
    const soldierCount = mat.map(row => row.reduce((a, b) => a + b))
    // sort count
    const sortedSoldiers = [...soldierCount].sort((a, b) => a - b).splice(0, k)
    // array that will hold k weakest soldiers
    let weak = []
    
    for(i in sortedSoldiers){
        // find the row that corresponds to the amount of soldiers
        const index = soldierCount.indexOf(sortedSoldiers[i])
        // push the row's index
        weak.push(index)
        // replace the value of the row to avoid repeats
        soldierCount[index] = "x"
    }
    
    return weak
}
