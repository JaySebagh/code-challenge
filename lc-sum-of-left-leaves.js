Find the sum of all left leaves in a given binary tree.

let sumOfLeftLeaves = function(root) {
    // create a variable to hold left tree sum value
    // traverse the list
    // add left node value to the left sum tree value variable
    
    // variable to hold left tree sum value
//     let sumLeftTree = 0;
    
//     // function to traverse the tree, passing in a node
//     let traverse = (node) => {
//      // if there is a node left, add it's value to sumLeftTree and pass the node to the traverse function
//      if(node.left){
//          sumLeftTree += node.left.val
//          traverse(node.left)
//      }
//      // if there is a node right, pass it to the traverse function
//      if(node.right) traverse(node.right)
//     }
    
//     traverse(root)
    
//     return sumLeftTree
    let sumLeftTree = 0;
    let traverse = (node) => {
        if(!node) return
        if(node.left){
            if(!node.left.left && !node.left.right){
                sumLeftTree += node.left.val
            }
        }
        traverse(node.left)
        traverse(node.right)
    }
    
    traverse(root)
    return sumLeftTree
}
