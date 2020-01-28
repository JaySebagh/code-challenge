// Given a binary tree, return the inorder traversal of its nodes' values.

let inorderTraversal = function(root) {
    // variable to hold inorder values
    let values = []
    
    // function to traverse
    let traverse = function(node){
        // check if the node is not null
        if(node){
            // call traverse function and pass in left
            traverse(node.left)
            // push the value
            values.push(node.val)
            // call traverse function and pass in right
            traverse(node.right)
        }
    }
    
    // run traverse function and pass in the root
    traverse(root)
    
    // return in order traversal
    return values
}
