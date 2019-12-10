// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists

def sortedInsert(head, data):
    current = head 
    newNode = DoublyLinkedListNode(data)
​
    # check if the data element < head value 
    if data < head.data:
        # create a new head node with the data element 
        # 1. new node's next = head 
        newNode.next = head 
        # 2. set head's prev = new node 
        head.prev = newNode 
        head = newNode 
        return head 
​
    # iterate through our dll 
    while current is not None:
    # check if the data int > current element
        # if it is, move on to the next node 
        # if data int < current element 
        if data < current.data:
            # insert the data element right before the current element
            # 1. new node's next = current 
            newNode.next = current
            # 2. new node's prev = current.prev 
            newNode.prev = current.prev
            # 3. current.prev.next = new node 
            current.prev.next = newNode
            # 4. current.prev = new node 
            current.prev = newNode
            break
        # handle the case where the data element > tail element 
        # in this case, we're adding a new tail 
        # elif current.next is None:
            # 1. new node's next = None
            newNode.next = None
            # 2. new node's prev = current 
            newNode.prev = current
            # 3. current.next = new node 
            current.next = newNode 
            break
        current = current.next
​
        # if we've reached the end of the iteration,
        # then we're at the tail of the list and we haven't
        # inserted the data element, i.e. the data element 
        # needs to be the new tail 
        # insert the new node as the new tail of the list 
​
    # return the head of the modified dll 
    return head 
