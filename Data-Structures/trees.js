/**
   TREE:-
    - A Data Structure that consists of nodes in a parent/child relationship.
    - It is generally inverted i.e. from root to leaves
    - It is a sub-type of Graph where there is only one path between any two nodes.
    - Unlike linked list which is linear, each node in tree can point to multiple nodes, making them non-linear.
    - Linked list is a special case of tree.
    - There are several varieties of trees
    - Tree --> Binary Tree --> Binary Search Tree
    - A Node cannot point to its sibling, only to its children. So, every node moves away from root node.
    - Some Terminology used for Trees are given below:
        Root:- The top node in a tree.
        Child:- A node directly connected to another node when moving away from the root.
        Sibling:- A group of nodes with the same parent.
        Leaf:- A node with no children.
        Edge:- The connection between one node and another.
  
   BINARY TREE:- 
   - have at-most (0, 1 or 2) two children per node
   - Can have values of any type
   - Items can be stored in any order

   BINARY SEARCH TREE:-
    - have at-most (0, 1 or 2) two children per node
    - stored in an order
    - Used to store data that can be compared mostly numbers
    - Items less than the parent node are stored on the left side of the tree
    - Items greater than the parent node are stored on the right side of the tree
    - Above logic is repeated at every child node
   
   Application of Tree:-
   1. HTMl Dom
   2. Network Routing
   3. Artificial Intelligence like tic-tac-toe game
   4. code directory in a computer

   Big O of BST (!! Not Guaranteed !!):-
   1. Insertion - O(log n) As the tree no des doubles the steps increases by 1
      - 2x number of nodes: 1 extra step
      - 4x number of nodes: 2 extra step
      - 8x number of nodes: 3 extra step
   2. Finding - O(log n) same as above
   Worst Case is when binary tree is like a linked list i.e. all nodes are in one side then it can be O(n)

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
  /* ------------------------------ Insert Method Using While Loop ----------------------------- */
  insert(value) {
    /* creating a new node */
    let newNode = new Node(value);
    /* if there is no root then make the new node as root */
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      let currentParentNode = this.root;
      while (true) {
        if (value > currentParentNode.value) {
          /* If no right child then make the new node as right child */
          if (currentParentNode.right === null) {
            currentParentNode.right = newNode;
            return this;
          } else {
            /* If there is a right child then move to that child and repeat these steps */
            currentParentNode = currentParentNode.right;
          }
        } else if (value < currentParentNode.value) {
          /* If no left child then make the new node as left child */
          if (currentParentNode.left === null) {
            currentParentNode.left = newNode;
            return this;
          } else {
            /* If there is a left child then move to that child and repeat these steps */
            currentParentNode = currentParentNode.left;
          }
        } else {
          /* If the value is same as the value of node then return undefined */
          return undefined;
        }
      }
    }
  }

  /* ------------------------ Insert Method Using Recursion ----------------------- */
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

  find(value) {
    if (this.root === null) return false;
    if (value === this.root.value) return true;
    else {
      let currentParentNode = this.root;
      while (true) {
        if (value > currentParentNode.value) {
          /* If no right child then make the new node as right child */
          if (currentParentNode.right === null) {
            return false;
          } else {
            /* If there is a right child then move to that child and repeat these steps */
            currentParentNode = currentParentNode.right;
          }
        } else if (value < currentParentNode.value) {
          /* If no left child then make the new node as left child */
          if (currentParentNode.left === null) {
            return false;
          } else {
            /* If there is a left child then move to that child and repeat these steps */
            currentParentNode = currentParentNode.left;
          }
        } else {
          /* If the value is same as the value of node then return true */
          return true;
        }
      }
    }
  }
}

let tree = new BST();
tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
// console.log(tree);
tree.insert(15);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(5);
console.log(tree.find(100));
// console.log(tree);
