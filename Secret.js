// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

// Notes
// The secret society's name should be entirely uppercased.

function societyName(friends) {
  let secretFriends = []
  for(let i = 0; i < friends.length; i++) {
    secretFriends.push(friends[i].charAt(0).toUpperCase())
  }
  return secretFriends.sort().join("")
}

const answer = societyName(["Adam", "Sarah", "Malcolm"]);
console.log(answer);