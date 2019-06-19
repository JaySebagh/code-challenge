//  Take an array of names and return the greeting "Hello", comma seperated.

// greetPeople(["Jay"]) ➞ "Hello Jay"
// greetPeople(["Chris", "Jay"]) ➞ "Hello Chris, Hello Jay"
// greetPeople(["Olan", "Chris", "Jay"]) ➞ "Hello Olan, Hello Chris, Hello Jay"

function greetPeople(names) {
  // create empty array
  let namesArray = [];
  // for loop based of the length of the given array of names
  for(let i = 0; i < names.length; i++){
  // push each name into the new array using string interpolation
    namesArray.push(`Hello ${names[i]}`)
  }
  // return the array as a concat string
  return namesArray.join(", ");
}

const answer = greetPeople(["Olan", "Chris", "Jay"]);
console.log(answer);