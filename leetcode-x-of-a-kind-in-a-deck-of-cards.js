// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/

// brainstorm/sudo code
// count cards using map
// return map values
// return all map values are equal


// kept updating code but kept failing next test
const hasGroupsSizeX = (deck) => {
    let count = new Map();
    
    for(let card of deck) count.set(card, count.get(card) + 1 || 1);

    let occurence = [...count.values()]
    
    if(!occurence.every((v) => v > 1)) return false
    
    for(let i = 0; i < occurence.length - 1; i++){
        const curr = occurence[i], next = occurence[i + 1];

        if(curr > next){
            if(!((curr / next) % 1 === 0)) return false
        } else {
            if(!((next / curr) % 1 === 0)) return false
        }
    }

    return true
};

console.log(hasGroupsSizeX([0,0,0,1,1,1,1,1,1,2,2,2,3,3,3])) //t
console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1])) //t
console.log(hasGroupsSizeX([1,1,2,2,2,2])) //t
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3])) //f
console.log(hasGroupsSizeX([1])) //f
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3])) //f
console.log(hasGroupsSizeX([1,1,2,2,2,2,3])) //f


// other solutions

const hasGroupsSizeX = function(deck) {
    let buckets = new Map();
    
    deck.forEach ((card) => {
        let count = buckets.get(card);
        buckets.set(card, count ? count+1 : 1);
    });
    
    let res = 0;
    for (let bucket of buckets.values()) {
        res = gcd(res, bucket);
    }
    
    return res > 1;
};

function gcd (a, b) {
    return b > 0 ? gcd(b, a % b) : a;
}
