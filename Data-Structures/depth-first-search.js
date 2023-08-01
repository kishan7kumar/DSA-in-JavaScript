/** 
   Depth First Search
   - Going down the tree vertically
   - Can be used for any tree not specifically for Binary Tree
   - 
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

/* --------------------------- Pre Order Traversal -------------------------- */

/* Pre Order Traversal means we will visit the node first traverse left side first and then right side
    Advantages:-
    1. Useful when trying to clone a tree because we have a structure of the tree maintained

*/
function DFSPreOrder(tree) {
  let visited = [];
  /* We know in recursion, things reverse back so when we go to the left end of 
     the tree and then we come back up and move toward right side of the tree
  */
  function traverse(node) {
    visited.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(tree.root);
  return visited;
}

/* -------------------------- Post Order Traversal -------------------------- */

/* Root is the last thing that is visited 
   Here we visit all the children first and then the root node 
*/
function DFSPostOrder(tree) {
  let visited = [];
  function traverse(node) {
    node.left && traverse(node.left);
    node.right && traverse(node.right);
    visited.push(node.value);
  }
  traverse(tree.root);
  return visited;
}

/* --------------------------- In Order Traversal --------------------------- */

/* In Order Traversal means we will traverse the left side first 
   then the node and then traverse the right side 
   Advantages:-
   1. If we are given a BST in order then using InOrder Traversal we will get the sorted order of the tree
*/
function DFSInOrder(tree) {
  let visited = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    visited.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(tree.root);
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
console.log("\n ----- Pre Order Traversal ----");
console.log(DFSPreOrder(tree));
console.log("\n ----- Post Order Traversal ----");
console.log(DFSPostOrder(tree));
console.log("\n ----- In Order Traversal ----");
console.log(DFSInOrder(tree));
