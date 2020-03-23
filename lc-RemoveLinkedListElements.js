// Remove all elements from a linked list of integers that have value val.

let removeElements = function(head, val) {
    // if there is no head return null
    if(!head) return null;
    // if it's the first value, return head.next
    if(head.val === val) return head.next
    
    // set previous and current variables
    let prev = head
    let curr = head.next
    
    // while there is a node
    while(curr){
        // check if the node's value matches
        if(curr.val === val){
            // if it does, remove it
            curr = curr.next
            prev.next = curr
        } else {
            // if it doesn't continue looping
            prev = curr
            curr = curr.next
        }
    }
    
    // return the modified linked list
    return head
}
