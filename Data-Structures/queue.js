/**
  QUEUE:-
  A FIFO(First in First Out) data structure (a general concept to be precise) which
  means the first item added to the queue will be the first item removed from the queue.
  Also there is no indexing so it can grow large comfortably.
  Example:- Waiting in human line.
 
  Application of Queue:-
  1. Online games or rooms to join .
  2. background tasks.
  3. Uploading resources.
  4. Foundation structure for more complex data structures.
 
  Big O of Queue:-
  1. Insertion - O(1)
  2. Remove - O(1)
  3. Searching - O(n)
  4. Access - O(n)
 */

/* -------------------------------------------------------------------------- */
/*                     Implementation of Queue using Array                    */
/* -------------------------------------------------------------------------- */

/* Here in this implementation we don't want order or indexes so it becomes a little bit inefficient */

/* ---------------------------- Push and Shift Way ---------------------------- */
console.log("\n------  Queue using Arrays -----");
var q = [];

q.push("first");
q.push("second");
q.push("third");

q.shift(); /* this will remove first from the queue FIFO */
q.shift(); /* this will remove second from the queue FIFO */
console.log(q);

/* ---------------------------- Pop and UnShift Way ---------------------------- */

var q2 = [];
q2.unshift("first");
q2.unshift("second");
q2.unshift("third");

q2.pop(); /* this will remove first from the queue FIFO */
q2.pop(); /* this will remove second from the queue FIFO */
console.log(q2);

/* -------------------------------------------------------------------------- */
/*                    Implementing Queue using Linked List                    */
/* -------------------------------------------------------------------------- */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* --------------------------------- Enqueue -------------------------------- */
  /* Adding at the end of the queue */
  enqueue(val) {
    /* Creating a new node */
    let newNode = new Node(val);
    /* if the queue is empty */
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldLastNode = this.last;
      this.last = newNode;
      oldLastNode.next = this.last;
    }
    /* incrementing the size */
    ++this.size;
    return this.size;
  }

  /* --------------------------------- Dequeue -------------------------------- */
  /* Removing from the beginning of the queue */
  dequeue() {
    /* if the queue is empty */
    if (!this.first) return null;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    }
    this.first = this.first.next;
    this.first.next = null;
    this.size--;
    return this.size;
  }

  print() {
    let arr = [];
    let current = this.first;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

console.log("\n------  Queue using Linked List -----");
let queue = new Queue();
queue.enqueue("first");
queue.enqueue("second");
console.log("\nBefore dequeue: ");
queue.print();
queue.dequeue();
console.log("\nAfter dequeue:");
queue.print();
