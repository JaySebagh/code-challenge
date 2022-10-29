// https://leetcode.com/problems/occurrences-after-bigram/

// brainstorm/sudo code
// 

// solution fails, edge cases too annoying (use of random string of letters rather than words)
const findOcurrences = function(text, first, second) {
    let found = []
    text = text.split(" ")

    let findFirst = text.findIndex((word) => word === first);
    first = text[findFirst + 2];
    text = text.splice(findFirst + 3, text.length);
    let findSecond = text.findIndex((word) => word === second);
    second = text[findSecond + 1];
    if(first) found.push(first);
    if(second) found.push(second)
    return found
};

console.log(findOcurrences("alice is a good girl she is a good student", "a", "good")) // ["girl","student"]

console.log(findOcurrences("we will we will rock you", "we", "will")) // ["we","rock"]

console.log(findOcurrences("alice is aa good girl she is a good student", "a", "good")) // ["student"]


// other solutions

const findOcurrences = function(text, first, second) {
    return text.split(' ')
        .filter((_, i, arr) => arr[i - 2] === first && arr[i - 1] === second)
};

//

const findOcurrences = function(text, first, second) {
    let result = [];
    text = text.split(' ');
    
    for(let i = 0; i < text.length - 2; i++){
        if(text[i] === first && text[i + 1] === second) result.push(text[i + 2]);
    }
    
    return result;
};
