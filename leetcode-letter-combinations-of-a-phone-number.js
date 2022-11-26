// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// brainstorm/sudo code
// 

const letterCombinations = (digits) => {
    const dict = new Map()
    const nums = digits.split("")
    
    dict.set("2", ["a", "b", "c"])
            .set("3", ["d", "e", "f"])
            .set("4", ["g", "h", "i"])
            .set("5", ["j", "k", "l"])
            .set("6", ["m", "n", "o"])
            .set("7", ["p", "q", "r", "s"])
            .set("8", ["t", "u", "v"])
            .set("9", ["w", "x", "y", "z"])

    const first = dict.get(nums[0])
    const rest = nums.splice(1).map((num) => { return dict.get(num) })

    
};

console.log(letterCombinations("234")) // ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]


// other solutions
const letterCombinations = (digits) => {
    if(!digits.length) return [];
    
    let result = [];
    
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    
    function permute(string, index) {
        if(index === digits.length) {
            result.push(string);
            return;
        }
        
        for(let letter of map[digits[index]]) permute(string + letter, index + 1);
    }
    
    permute('', 0);
    
    return result;
};


// dfs

const letterCombinations = (digits) => {
    let map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let res = [];
    let prefix = [];
    
    if(digits.length) traverse(0);
    return res;
    
    function traverse(num) {
        if(num === digits.length) { return res.push(prefix.join('')) };
        
        let str = map[digits[num] - '0'];
        
        for(let i = 0; i < str.length; i++) {
            prefix.push(str[i]);
            traverse(num + 1);
            prefix.pop();
        }
    }
}
