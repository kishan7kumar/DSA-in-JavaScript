/* 
    Priority Queue
    - A data structure where each element has a priority. Elements with higher priorities 
    are served before elements with lower priorities.
    - They are separate from heap and are abstract concepts, so we can use array or list to represent priority queue. However, they are not efficient
    and take O(n) time to insert and remove elements. Whereas, heaps are efficient and take O(log n) time.

    Applications:
    1. Unix terminal processes
*/

class Node {
  constructor(value, priority) {
    /* Value can be string, number or other doesn't matter */
    this.value = value;
    /* Lower values has high priority so 1 > 2 */
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    if (this.values.length !== 0) {
      let index = this.values.length - 1;
      let parentIndex = Math.floor((index - 1) / 2);

      while (
        parentIndex >= 0 &&
        this.values[index].priority < this.values[parentIndex].priority
      ) {
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

  /* Right now the dequeue logic does not consider for the case of same priority level if that happens we can add a new parameter in node class like date or time */
  dequeue() {
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
          if (
            this.values[leftIndex].priority < this.values[parentIndex].priority
          ) {
            swap = leftIndex;
          }
        }
        if (rightIndex < this.values.length) {
          if (
            this.values[rightIndex].priority <
              this.values[parentIndex].priority &&
            this.values[rightIndex].priority < this.values[leftIndex].priority
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

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Common Cold", 5);
priorityQueue.enqueue("Gunshot Wound", 1);
priorityQueue.enqueue("High Fever", 4);
priorityQueue.enqueue("Broken Arm", 2);
priorityQueue.enqueue("Glass in Foot", 3);
console.log("\n\n ----- PriorityQueue after enqueue: --- \n", priorityQueue);
priorityQueue.dequeue();
console.log("\n\n ----- PriorityQueue after dequeue: ----  \n", priorityQueue);
priorityQueue.dequeue();
console.log("\n\n ----- PriorityQueue after dequeue: ----  \n", priorityQueue);
priorityQueue.dequeue();
console.log("\n\n ----- PriorityQueue after dequeue: ----  \n", priorityQueue);
priorityQueue.dequeue();
console.log("\n\n ----- PriorityQueue after dequeue: ----  \n", priorityQueue);
priorityQueue.dequeue();
console.log("\n\n ----- PriorityQueue after dequeue: ----  \n", priorityQueue);
