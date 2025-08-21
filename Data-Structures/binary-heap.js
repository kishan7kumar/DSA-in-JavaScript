/** 
   Binary Heap
   - Similar to or a type of binary search tree
   - In MaxBinaryHeap, parent nodes are always larger than child nodes
   - In MinBinaryHeap, parent nodes are always smaller than child nodes
   - No order in between siblings
   - We always fill the left side first
   - Not optimized for searching as there is no order maintained

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

    Big O Time Complexity:-
    1. Insertion - O(log n)
       For 16 nodes/elements... 4 comparisons which is 2^x = 16 so x=4 so steps are 4. So, whenever we double the nodes we increase the step only by 1.
    2. Removal - O(log n)
    3. Search - O(n)
    !!! NOTE: Because in Heap tree we will out left first and then right there is no case like trees where we have long vertical nodes list, so worst case time complexity is still O(log n)
    
  */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

/** We have to make sure two things
 *  1. Always ensure that your Heap is a complete binary tree
 *  2. All parent.val <= children if its a min heap
 */
  insert(val) {
    /** To maintain 1st condition element is added always at the last in heap */ 
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }

   /** This process is also called Heapify */
   bubbleUp() {
      let idx = this.values.length - 1;
      let element = this.values[idx];
       while(idx > 0) {
         /* parent will always be at (n-1)/2 */
         /* child is at 2n+1 and 2n+2 */
         let parentIdx = Math.floor((idx - 1)/2);
         let parent = this.values[parentIdx];
         if(element <= parent) break;
         this.values[parentIdx] = element;
         this.values[idx] = parent;
         idx = parentIdx;
       }
   }

  /** 
   * Extraction always happen from the top to maintain the core structure of the Heap
   * and we pop out last element and subsitute it with the root element, The tree
   * becomes unbalanced which means it will not be min or max heap depending on what it was originally.
   * Hence we will have to heapify down
  */
  extractMax() {
    /* Swap the root and the last element */
    let maxElement = this.values[0];
    let endElement = this.values.pop();
    /* This is a bubble up logic */
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

  /** We follow below steps:
   * 1. Create a max heap of the unsorted array
   * 2. Swap the first and last value 
   * 3. Reduce the size of the heap
   * 4. Heapify Down
   * 5. Repeat the steps 2 to 4 until array is sorted
  */  
  Sort(arr){
     // Step 1: Create a max heap
     // run a lopp from back to front
      for(let i=n-1; i>=0; i--){
         heapifyDown(arr, i)
      }

      function heapifyDown()
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
