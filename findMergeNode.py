def findMergeNode(head1, head2):
    # can we iterate at different speeds?
    # maybe change the values in each linked list node? 
    # change the values as a way to mark which nodes we've 
    # seen already 
​
    # have a dictionary that counts number of connections to 
    # each node 
    # how do we actually link the keys in the dict to a specific node?
    # can we add an attribute to each node? 
    # build a copy where we have an additional attribute on each node
    # so that we know the number of connections to each node
​
    # we could utilize a nested loop where the outer loop iterates 
    # over the nodes in the first list and the inner loop iterates 
    # over the nodes in the second list 
        # doing this, we could check if any two nodes point to the 
        # same node 
    # currA = head1
    # currB = head2
​
    # while currA:
    #     while currB:
    #         if currA.next is currB.next:
    #             return currA.next
    #         currB = currB.next
    #     currA = currA.next 
​
    # turn both lists into arrays
    # see which values are shared between both arrays
​
    # traverse one of the lists, adding each node to a dict 
    # traverse the other list, checking if any of the nodes 
    # in the second list exist in the dict 
​
    # runtime: O(n + m)
    # space: O(n)
    # n is the length of the first list 
    # m is the length of the second list 
    # s = set()
​
    # currA = head1 
    # currB = head2 
​
    # while currA:
    #     s.add(currA) 
    #     currA = currA.next 
​
    # while currB:
    #     if currB in s:
    #         return currB.data 
    #     currB = currB.next 
​
    # instead of allocating a data structure to hold all the elements 
    # in the first list, if we could just add an attribute to each of
    # the elements in the first list 
    # traverse the second list, check if any of the nodes in the second list has the "visited" attribute 
​
    # runtime: O(n + m)
    # space: O(1)
​
    currA = head1 
    currB = head2 
​
    while currA:
        currA.visited = True  
        currA = currA.next 
​
    while currB:
        if hasattr(currB, 'visited'):
            return currB.data 
        currB = currB.next
