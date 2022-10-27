// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// brainstorm/sudo code
// loop through the string
// check if curr matches next
// if it does remove them
// restart the loop

const removeDuplicates = function(str) {
    str = str.split("");
    
    for(let i = 0; i < str.length - 1; i++){
        if(str[i] === str[i + 1]){
            str.splice(i, 2);
            i -= 2;
        };
    };
    
    return str.join("")
};

console.log(removeDuplicates("abbaca")) // "ca"


// other solutions

const removeDuplicates = str => {
    const stack = [];
    
    for(const char of str) stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
    
    return stack.join('');
};

//

const removeDuplicates = str => {
    const remove = str.replace(/(.)\1/g, '');
    return remove.length === str.length ? str : removeDuplicates(remove);
};
