/**
  Breadth First Search
  
  - Going across the tree horizontally
  - Can be used for any tree not specifically for Binary Tree
  - It is the space complexity that is considered for BFS and DFS and
    not the time complexity. Time complexity is same for both BFS and DFS
  - BFS on a wide tree consumes more memory than DFS on a wide tree due
    to use of Queue in it's implementation
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insertRecursive(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    function inserted(value, currentParentNode) {
      if (value < currentParentNode.value) {
        if (currentParentNode.left === null) {
          currentParentNode.left = newNode;
        } else {
          return inserted(value, currentParentNode.left);
        }
      } else {
        if (currentParentNode.right === null) {
          currentParentNode.right = newNode;
        } else {
          return inserted(value, currentParentNode.right);
        }
      }
      return this;
    }
    return inserted(value, this.root);
  }
}

/* Using Queue for Breadth First Search and Array method of Queue for simplicity */
function BFS(tree) {
  let queue = [];
  let visited = [];
  queue.push(tree.root);
  while (queue.length) {
    /* dequeue first*/
    node = queue.shift();
    visited.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return visited;
}

let tree = new BST();
tree.root = new Node(10);
tree.insertRecursive(6);
tree.insertRecursive(15);
tree.insertRecursive(3);
tree.insertRecursive(8);
tree.insertRecursive(20);
tree.insertRecursive(14);
console.log(
  `
          10
      /       \\
     6          15
   /    \\     /    \\ 
  3      8   14     20
`
);
console.log(BFS(tree));
