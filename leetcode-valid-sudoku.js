// https://leetcode.com/problems/valid-sudoku/

// brainstorm/sudo code
// create a set
// loop through each array and add to set, if it exists return false
// clear set
// loop through each array vertically and add to set, if it exists return false
// clear set
// loop through each block and add to set, if it exists return false
// return true

const isValidSudoku = (board) => {
    function isUnique(arr){
        return (new Set(arr)).size === arr.length
    }
    
    function row(){
        for(let i = 0; i < board.length; i++){
            let numsOnly = [];
            
            board[i].map((elem) => { if(elem !== ".") numsOnly.push(elem) })
            if(!isUnique(numsOnly)) return false
        }

        return true
    }

    function column(){
        const numsOnly = new Map();
        
        for(let i = 0; i < board.length; i++) numsOnly.set(i, []);
        
        for(let i = 0; i < board.length; i++){
            board[i].map((elem, j) => {
                if(elem !== "."){
                    let curr = numsOnly.get(j)
                    curr.push(elem)
                    numsOnly.set(j, curr)
                }
            })
        }

        for(let i = 0; i < board.length; i++) if(!isUnique(numsOnly.get(i))) return false

        return true
    }

    function square(){
        const numsOnly = new Map();
        
        for(let i = 0; i < board.length; i++) numsOnly.set(i, []);

        let counter = 0;

        for(let i = 0; i < board.legnth; i++){
            counter++
            console.log(counter)
            // if(counter % 3 == 0) console.log(counter)
        }
    }
    
    // console.log(row())
    // console.log(column())
    console.log(square())
};

console.log(isValidSudoku(
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])) // true

// console.log(isValidSudoku(
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".","5","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]])) // false row

// console.log(isValidSudoku(
// [["5","3",".",".","7",".",".",".","."]
// ,["6","3",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]])) // false column

// console.log(isValidSudoku(
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]])) // false square
