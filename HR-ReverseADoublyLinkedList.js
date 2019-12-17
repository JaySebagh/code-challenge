// https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem

// You’re given the pointer to the head node of a doubly linked list.
// Reverse the order of the nodes in the list.
// The head node might be NULL to indicate that the list is empty.
// Change the next and prev pointers of all the nodes so that the direction of the list is reversed.
// Return a reference to the head node of the reversed list.

function reverse(head) {
    let current = head;
    let prev = null;

    while(current){
        let next = current.next;
        current.next = prev;
        current.prev = next;
        prev = current;
        current = next;
    }
    head = prev;
    return head
}
