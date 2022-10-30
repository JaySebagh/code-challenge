// https://leetcode.com/problems/defanging-an-ip-address/

// brainstorm/sudo code
// replace using regex

const defangIPaddr = function(address) {
    return address.replace(/[.]/g, "[.]")
};

console.log(defangIPaddr("1.1.1.1")) // "1[.]1[.]1[.]1"


// other solutions

const defangIPaddr = function(address) {
    let result = "";
    
    for(let i = 0; i < address.length; i++) {
        if(address[i] === ".")
            result += "[.]";
        else
            result += address[i];
    }
    
    return result;    
};
