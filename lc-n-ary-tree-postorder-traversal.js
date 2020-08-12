// Given an n-ary tree, return the postorder traversal of its nodes' values.

let postorder = function(root) {
//     returns cannot read property left of undefined
    
//     let visited = []
//     let current = this.root
    
//     let traverse = node => {
//         if (node == null) return
//         if(node.left) traverse(node.left)
//         if(node.right) traverse(node.right)
//         visited.push(node.val)
//     }
    
//     traverse(current)
//     console.log(visited)
    
    let visited = [];
    
    const traverse = node => {
        if(!node) return;
        for(child of node.children) {
            traverse(child);
        }
        visited.push(node.val);
    }
    
    traverse(root);
    return visited;
}
