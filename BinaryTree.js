// pop from array

// if the num is > than the node, set it to right
  // else set it to left

// if there is already a left/right, go down the tree until you can add a new left/right

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  insert(value){
    if(value < this.value){
      if(!this.left){
        this.left = new BinarySearchTree(value)
      } else {
        this.left.insert(value)
      }
    }
    else {
      if(!this.right){
        this.right = new BinarySearchTree(value)
      } else {
        this.right.insert(value)
      }
    }
  }
}

const tree = new BinarySearchTree(5)

testArr = [2, 3, 7, 6]

while(testArr.length > 0){
  insertNum = testArr.pop()
  tree.insert(insertNum)
}

console.log(tree.left)
