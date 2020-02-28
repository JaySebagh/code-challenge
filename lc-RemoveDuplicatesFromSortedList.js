// Given a sorted linked list, delete all duplicates such that each element appear only once.

let deleteDuplicates = function(head) {
    // loop through the linked list
    // if current val is same as next, change current's next to next's next
    // else continue looping
    
    let curr = head;
    
    while(curr){
        if(curr.next != null && curr.val === curr.next.val){
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head
}
