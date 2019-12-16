def helper(root, min, max):
    if root is None:
        return True
    if root.data <= min or root.data >= max:
        return False 
    return helper(root.left, min, root.data) and helper(root.right, root.data, max)
​
def checkBST(root):
    return helper(root, float("-inf"), float("inf"))
​
def ch(root, visited):
    # traverse the tree (what kind of traversal?)
    # for each new traversal, specify a range that we need to check within
    # it's not enough to just check if the left value < parent and right
    # value > parent locally
    # we need to somehow be able to check outside the bounds of the local
    # subtree 
    
    # can we store the path as we're traversing down the tree?
    # have a "visited" array that we pass to each recursive call
    # maybe this is too complicated 
    
    # starting at the root  
    # check if the left child exists
    if root.left:
        # check the left child's data to see if its value < parent's data 
        if root.left.data > root.data:
            # if it isn't, return false 
            return False 
        else:
            # travserse into the left subtree 
            return checkBST(root.left)
    # check if the right child exists 
    if root.right:
        # check the right child's data to see if its value > paren'ts data
        if root.right.data < root.data:
            # if it isn't, return false 
            return False
        else:
            return checkBST(root.right)
    # return true 
    return True 
​
    # convert the bst into an array 
    # check if the array is sorted 
