// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

var reverseList = function(head) {
    let current = head
    let next = head
    let prev = null
    
    while(current !== null){
        next = next.next
        current.next = prev
        prev = current
        current = next
    }
    
    return prev
}
