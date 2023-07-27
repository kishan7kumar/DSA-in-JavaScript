/* -------------------------------------------------------------------------- */
/*                                 Node Class                                 */
/* -------------------------------------------------------------------------- */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("high");
// first.next = new Node("there");
// first.next.next = new Node("how");

/* -------------------------------------------------------------------------- */
/*                              LinkedList Class                              */
/* -------------------------------------------------------------------------- */
/** NOTE:- 1. Linked List excel at deletion and insertion when compared to arrays
 *         2. Linked List do not contain built in indexes
 *         3. Foundation for Stacks and Queues 
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push Method
   * pushes the value into list from the end
   * @param {value to be be pushed into list} val
   */
  push(val) {
    let newNode = new Node(val);
    // *If list is empty
    if (!this.head) {
      this.head = newNode; //*heads points to new node
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * Pop Method pops the value from list from the end
   * @returns popped node element
   */
  pop() {
    // *If list is empty
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current; //*return the popped node
  }

  /**
   * Shift Methods removes a new node from the beginning of the list
   */
  shift() {
    // *If list is empty
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length !== 0) {
      // heads automatically get assigned to null but tail doesn't
      this.tail = null;
    }
    return current; //return the popped node
  }

  /**
   * Unshift Methods adds a new node to the beginning of the list
   */
  unshift(val) {
    let newNode = new Node(val);
    // If list is empty
    if (!this.head) {
      this.head = newNode; //*heads points to new node
      this.tail = this.head;
      return;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   *
   * Get method is used to retrieve a node element by taking index value as an input
   * Time Complexity for accessing or searching:- O(N)
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return temp;
      temp = temp.next;
    }
  }

  /**
   * Set Method updated the node with a new value.
   */
  set(index, value) {
    let foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = value;
    return true;
  }

  /**
   * Insert methods inserts a new node in the given index position
   * Time Complexity:- O(1)
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    else if (index === 0) {
      this.unshift(value);
      return true;
    } else if (index === this.length) return !this.push(value);
    else {
      let newNode = new Node(value);
      let prevNode = this.get(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
  }

  /**
   * Remove methods removes a node from a specific position
   * Time Complexity:- O(1) when removing from beginning and O(N) when removing from end
   */
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    else if (index === this.length - 1) {
      this.pop(index);
      return true;
    } else if (index === 0) {
      this.shift(index);
      return true;
    } else {
      let currentNode = this.get(index);
      let prevNode = this.get(index - 1);
      prevNode.next = currentNode.next;
      this.length--;
      return true;
    }
  }

  /**
   * Reverse methods reverse the linked list
   * !!!! COMMON QUESTION IN INTERVIEW
   */
  reverse() {
    // swap head and tail
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    // reversing logic
    let nextNode;
    let prevNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      //shifting the node windows
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push(23);
list.push(24);
list.push(40);
list.push(50);
list.push(100);
console.log("\n ---- Original list ----");
console.log(list.traverse());

// console.log("\n ---- Popped Node ----");
// console.log(list.pop());

// console.log("\n ---- Shifted Node ----");
// console.log(list.unshift(200));

// console.log("\n ---- Get Node from list ----");
// console.log(list.get(0));

// console.log("\n ---- Set Node from list ----");
// console.log(list.set(0, 90));

// console.log("\n ---- Inserting Node to List ----");
// console.log(list.insert(6, 90));

console.log("\n ---- Reversing Node to List ----");
console.log(list.reverse());

console.log("\n ---- Final List ----");
console.log(list.traverse());

