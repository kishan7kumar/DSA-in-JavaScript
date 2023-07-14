class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("high");
// first.next = new Node("there");
// first.next.next = new Node("how");

// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = new Node(val);
      this.length++;
    } else {
      this.tail.next = new Node(val);
      this.tail = new Node(val);
      this.length++;
    }
  }
}

let my = new SinglyLinkedList();
my.push(23);
my.push(24);

console.log(my);
