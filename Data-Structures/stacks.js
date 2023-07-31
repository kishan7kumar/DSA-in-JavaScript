/**
 * STACK:-
 * A LIFO(Last in First Out) data structure (a general concept to be precise) which
 * means the last item added to the stack will be the first item removed from the stack.
 * There are more than one way to implement a stack.
 * 
 * Example:- Stack of plates, stack of books, stack of anything.
 * 
 * Application of Stacks:-
 * 1. Managing function invocations like call stack in JS.
 * 2. Undo/Redo.
 * 3. Routing (the history object) is treated like a stack.
 *
 * Big O of Stacks:-
 * 1. Insertion - O(1)
 * 2. Remove - O(1)
 * 3. Searching - O(n)
 * 4. Access - O(n)
 */

/* -------------------------------------------------------------------------- */
/*                     Implementation of Stack using Array                    */
/* -------------------------------------------------------------------------- */
/* Here in this implementation we don't want order or indexes so it becomes a little bit inefficient */

console.log("\n------  Stack using Arrays -----");

/* ---------------------------- Push and Pop Way ---------------------------- */
let stack = [];

stack.push("google");
stack.push("instagram");
stack.push("youtube");

stack.pop(); /* this will remove youtube from the stack LIFO */

console.log("Pop and Push method: ", stack);

/* -------------------------- Unshift and Shift Way ------------------------- */
/* This way consumes more time than push and pop way -> Time Complexity O(n) */
let stack2 = [];

stack2.unshift("john");
stack2.unshift("jane");
stack2.unshift("ron");

stack2.shift(); /* this will remove ron from the stack LIFO */

console.log("Unshift and shift method: ", stack2);

/* -------------------------------------------------------------------------- */
/*                    Implementing Stack using Linked List                    */
/* -------------------------------------------------------------------------- */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* ------------------------------- Push Method ------------------------------ */
  /* Similar to Unshift method in Linked List */
  push(value) {
    let newNode = new Node(value);
    /* if there is no node */
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldNode = this.first;
      this.first = newNode;
      this.first.next = oldNode;
    }
    /* increase size by 1 */
    return ++this.size;
  }

  /* ------------------------------- Pop Method ------------------------------- */
  /* Similar to Shift method in Linked List */
  pop() {
    /* if there is no node */
    if (!this.first) return null;
    let oldNode = this.first;
    /* if there is only one node */
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    }
    /* if there are more than one node */
    this.first = oldNode.next;
    oldNode.next = null;
    /* reduce size by 1 */
    this.size--;
    /* return the value of the node */
    return oldNode;
  }

  print() {
    let current = this.first;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

console.log("\n------  Stack using Linked List -----");
let myStack = new Stack();
console.log("\nBefore pushing: ");
myStack.print();
console.log(myStack.push("google"));
console.log(myStack.push("youtube"));
console.log("\nAfter pushing: ");
myStack.print();
console.log("\nAfter popping: ");
console.log(myStack.pop());
myStack.print();
