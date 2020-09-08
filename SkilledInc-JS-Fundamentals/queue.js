// Implement Queue data structure with the standard enqueue and dequeue methods.
// What is the complexity of each method?

class Queue {
  constructor() {
      this.storage = {};
      this.size = 0;
  }

  enqueue(item) {
    this.storage[this.size] = item;
    this.size++;
    return `enqueue ${item}`;
  }

  dequeue() {
    let item = this.storage[0];
    delete this.storage[0];
    this.size--;
    return `dequeue ${item}`;
  }

  peek(){
    return this.storage[0];
  }

  display(){
    return this.storage;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("initial", myQueue.display())
console.log(myQueue.enqueue(4), myQueue.display())
console.log(myQueue.dequeue(), myQueue.display())
