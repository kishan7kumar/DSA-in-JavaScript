/**
 *  DOUBLY LINKED LIST
 *  Doubly linked list are similar to singly linked lists
 *  however they are
 *  1. bidirectional
 *  2. uses more memory
 *  3. faster in finding node and can be done in half time
 */

/* -------------------------------------------------------------------------- */
/*                                 Node Class                                 */
/* -------------------------------------------------------------------------- */
class Node {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

/* -------------------------------------------------------------------------- */
/*                              Doubly Linked List Class                      */
/* -------------------------------------------------------------------------- */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /* ------------------------------- PUSH  ------------------------------ */
  /**
   * PUSH method pushed one node into last of the list
   * Time Complexity:- O(1)
   */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /* ------------------------------- POP  ------------------------------- */
  /**
   * POP method removes node from last of the list
   * Time Complexity:- O(1)
   */
  pop() {
    if (this.length === 0) {
      return false;
    }
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null; // this prevents the lingering node previous values
    }
    this.length--;
    return poppedNode;
  }

  /* ------------------------------ SHIFT ------------------------------ */
  /**
   * Shift methods removes a node from beginning of list
   * Time Complexity:- O(1)
   */
  shift() {
    if (!this.head) return false;
    let oldNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldNode.next;
      this.head.prev = null;
      oldNode.next = null;
    }
    this.length--;
    return oldNode;
  }

  /* ----------------------------- UNSHIFT ----------------------------- */
  /**
   * Unshift method adds a node from beginning of list
   * Time Complexity:- O(1)
   */
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /* ------------------------------- GET ------------------------------- */
  /**
   * This method is used for accessing a node in the list by its position
   * Time Complexity:- O(N)
   */

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let middleIndex = Math.ceil(this.length / 2);
    let counter, currentNode;
    if (index <= middleIndex) {
      counter = 0;
      currentNode = this.head;
      for (let i = 0; i <= middleIndex; i++) {
        if (counter === index) {
          return currentNode;
        }
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      currentNode = this.tail;
      counter = this.length - 1;
      for (let i = this.length - 1; i > middleIndex; i--) {
        if (counter === index) {
          return currentNode;
        }
        currentNode = currentNode.prev;
        counter--;
      }
    }
  }

  /* ------------------------------- SET ------------------------------- */
  /**
   * Set Method will update the value at given index
   */

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  /* ------------------------------ INSERT ----------------------------- */

  insert(index, val) {
    if (index < 0 || index > this.length) {
      console.log("Index invalid!!!");
      return false;
    }
    if (index === 0) {
      console.log("Insert at beginning!");
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      console.log("Insert at end!");
      return !!this.push(val);
    }
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    (newNode.next = nextNode), (nextNode.prev = newNode);
    (prevNode.next = newNode), (newNode.prev = prevNode);
    this.length++;
    return true;
  }

  /* ------------------------------ REMOVE ----------------------------- */
  /**
   * Remove the node from the given index
   */

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    else if (index === this.length - 1) {
      this.pop();
      return true;
    } else if (index === 0) {
      this.shift();
      return true;
    } else {
      let removedNode = this.get(index);
      let prevNode = this.get(index - 1);
      let nextNode = this.get(index + 1);
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return true;
    }
  }

  /* ----------------------------- REVERSE ----------------------------- */
  /**
   * This method will reverse the linked list
   */
  reverse() {
    this.head = this.tail;
    let current = this.head;
    let prevNode, nextNode;
    while (current) {
      prevNode = current.prev;
      nextNode = current.next;
      current.prev = nextNode;
      current.next = prevNode;
      current = current.next;
    }
    return this;
  }
  /* ------------------------------ PRINT ------------------------------ */
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new DoublyLinkedList();
list.push(23);
list.push(24);
list.push(53);
list.push(73);
list.push(89);
list.push(90);

console.log("\n------ Original List");
console.log(list.print());
// console.log("\n------ Popped Element");
// console.log(list.pop());
// console.log("\n------ Shifted Element");
// console.log(list.shift());
// console.log("\n------ Unshifted Element");
// console.log(list.unshift(120));
// console.log("\n------ Get Element");
// console.log(list.get(4));
// console.log("\n------ Set Element");
// console.log(list.set(2, 1200));
// console.log("\n------ Remove Element");
// console.log(list.remove(-1));
console.log("\n------ Reverse Element");
list.reverse();
// console.log(list.head.next.next.value);
console.log("\n------ Modified List");
console.log(list.print());
