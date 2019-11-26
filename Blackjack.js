// In BlackJack, cards are counted with -1, 0, 1 values:

//     2, 3, 4, 5, 6 are counted as +1
//     7, 8, 9 are counted as 0
//     10, J, Q, K, A are counted as -1

// Create a function that counts the number and returns it from the array of cards provided.

function count(deck) {
  let addOne = [2, 3, 4, 5, 6]
  let minusOne = [10, "J", "Q", "K", "A"]
  let count = 0
  for(let i = 0; i < deck.length; i++){
    if(addOne.includes(deck[i])){
      count += 1
    }
    else if(minusOne.includes(deck[i])){
      count -=1
    }
  }
  return count
}

const answer = count([5, 9, 10, 3, "J", "A", 4, 8, 5])
console.log(answer)
