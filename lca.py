def lca(root, v1, v2):
    # use a search algorithm to find the node that matches the 
    # criteria for lowest common ancestor 
    # what are those criteria? 
​
    # while searching 
    # keep track of their parents and grandparents 
​
    # while binary searching through the tree 
    # adding each node that we pass through to an array 
    # do this for each node and then we look for the same nodes 
    # in each of those arrays 
​
    # observation: the lca node will have v1 and v2 on opposite sides 
    # so we need to find the node that satisfies this criteria 
    # we can't go up the tree 
​
    # start at the root 
    # check if v1 and v2 are on opposite sides of the root 
    # if they are, then the root is our lca and we're done 
    # otherwise, both nodes are on one side of the root 
    # traverse to that side 
​
    # recursive implementation 
    # base case: if v1 and v2 are on opposite sides 
    # if (v1 < root.info and v2 > root.info) or (v1 > root.info and v2 < root.info):
    #     return root 
    # # moving towards the case: both nodes are on one sides of the 
    # # root, traverse towards that side 
    # if v1 < root.info and v2 < root.info:
    #     if root.left:
    #         return lca(root.left, v1, v2)
    # if v1 > root.info and v2 > root.info:
    #     if root.right:
    #         return lca(root.right, v1, v2)
    # return root 
​
    if v1 < root.info and v2 < root.info:
        # traverse to the left 
        if root.left:
            return lca(root.left, v1, v2) 
    elif v1 > root.info and v2 > root.info:
        # traverse to the right 
        if root.right:
            return lca(root.right, v1, v2)
    # otherwise, v1 and v2 are on opposite sides and we've 
    # found the lca 
    return root 
