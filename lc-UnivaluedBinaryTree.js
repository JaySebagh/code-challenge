// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

let isUnivalTree = function(root) {
    // traverse tree using bfs/dfs
    // store root value
    // if node value is different from root value return false
    // else true
    
    let univalued = true
    
    let traverse = function(node){
        if(node){
            traverse(node.left)
            traverse(node.right)
            if(node.val !== root.val){
                univalued = false
            }
        }
    }
    
    traverse(root)
    
    return univalued
}


_______________________________________________________________________________________________________

Other people's solutions:
_______________________________________________________________________________________________________

let isUnivalTree = function(root, val = root.val) {
    if(!root) return true;
    
    return root.val === val && isUnivalTree(root.left, val) && isUnivalTree(root.right, val);
};
_______________________________________________________________________________________________________

let isUnivalTree = function(root, value = root.val) {
  if (!root) {
    return true;
  }
  
  if (root.val !== value) {
    return false;
  }
  
  return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
};
