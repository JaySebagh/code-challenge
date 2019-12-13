def is_leaf(node):
    return node.left is None and node.right is None 
​
def decodeHuff(root, s):
    # what is this question asking of us? 
    # we're not being tasked with constructing the tree 
    # we just need to figure out how to traverse it 
    # do we need to concern ourselves with how the tree is constructed?
​
    # start at the root
    current = root 
    output = ''
    # loop through the input string 
    # O(n) in the length of the string 
    for char in s:
        # check to make sure that the root has an edge corresponding
        # to the current character 
        if char == '1':
            # if it does, traverse to that node 
            if current.right:
                current = current.right 
        if char == '0':
            if current.left:
                current = current.left
        
        if is_leaf(current):
            # if the node has no children, then we've found a leaf 
            # containing a letter 
            # add this letter to the string we're building up 
            output += current.data 
            # reset the current pointer to the root 
            current = root 
​
    print(output)
