// Given a singly linked list, determine if it is a palindrome.

let isPalindrome = function(head) {
    let values = []
    let next = head;
    
    while(next){
        values.push(next.val)
        next = next.next
    }
    
    // if(!head || values.length === 1) return true
    
    // let reverseValues = [...values].reverse().join('')
    // values = values.join('')
    
    // return values === reverseValues ? true : false
    
    for(let i = 0; i < values.length / 2; i++){
        if(values[i] != values[values.length - 1 - i]) return false
    }
    
    return true
}
