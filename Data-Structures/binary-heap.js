/** 
   Binary Heap
   - Similar to binary search tree
   - In MaxBinaryHeap, parent nodes are always larger than child nodes
   - In MinBinaryHeap, parent nodes are always smaller than child nodes
   - No order in between siblings

    Two Types of Heaps:-

    A) MaxBinaryHeap
    - Each parent has at most two child nodes
    - The value of each parent node is always greater than its child nodes
    - In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
    - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.
    -             100
                /     \
               19      36
             /   \    /  \
            17    3  25   1
           / \  
          2   7
    
    B) MinBinaryHeap
    - Each parent has at most two child nodes
    - The value of each child node is always greater than its parent nodes
    - In a min Binary Heap the parent is smaller than the children, but there are no guarantees between sibling nodes.
    -              1
                /     \
               2       3
             /   \    /  \
            17    19 36   7
           / \  
         25   100
 
    Applications of Heaps:-
    1. Used to implement Priority Queues
    2. Used for graph traversal algorithms

    SinkDown:-
    The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap 
    or the minimum element in a min-heap) and restoring the properties is called down-heap 
    (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max).
    1. Root replaced with the last element
    2. The last element or the new root is sunk down to its correct position by replacing it with the largest of its children
  */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    if (this.values.length !== 0) {
      let index = this.values.length - 1;
      let parentIndex = Math.floor((index - 1) / 2);
      while (this.values[index] > this.values[parentIndex]) {
        /* Swap the parent and child element */
        let temp = this.values[index];
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = temp;
        /* Update the index and parentIndex parent moves up*/
        index = parentIndex;
        /* Update the parentIndex; search for child up the tree*/
        parentIndex = Math.floor((index - 1) / 2);
      }
    }
    return this.values;
  }

  extractMax() {
    /* Swap the root and the last element */
    let maxElement = this.values[0];
    let endElement = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = endElement;
      let parentIndex = 0;
      while (true) {
        let leftIndex = 2 * parentIndex + 1;
        let rightIndex = 2 * parentIndex + 2;
        let swap = null;
        if (leftIndex < this.values.length) {
          if (this.values[leftIndex] > this.values[parentIndex]) {
            swap = leftIndex;
          }
        }
        if (rightIndex < this.values.length) {
          if (
            this.values[rightIndex] > this.values[parentIndex] &&
            this.values[rightIndex] > this.values[leftIndex]
          ) {
            swap = rightIndex;
          }
        }
        if (swap === null) break;
        this.values[parentIndex] = this.values[swap];
        this.values[swap] = endElement;
        parentIndex = swap;
      }
    }

    return maxElement;
  }
}

let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);

console.log("\n---- Before extractMax ----- \n", maxBinaryHeap.values);
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log("\n---- After extractMax ----- \n", maxBinaryHeap.values);
