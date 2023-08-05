/* 
    graphs::
    A graph data structure is a collection of nodes and connection between those nodes.
          A
       /    \   
      B      E
      | \    |
      C  \   F
       \  \  / 
        \ / /
          D
    
    Essential graph Terms:
    1. Vertex - a node
    2. Edge - connection between nodes
    3. Weighted/Unweighted - values assigned to distances between vertices

    Types of graphs:
    1. Undirected graphs - no direction associated with a vertex like facebook friends
    2. Directed graphs (Digraphs) - direction assigned to a vertex like Instagram followers
    3. Weighted graphs - values assigned to distances between vertices like google Maps which ash
       directed and weighted graph

    Applications:
    1. Social networks
    2. Location/Mapping
    3. Routing Algorithms
    4. Visual Hierarchy
    5. File System Optimizations
    6. Recommendation Engines
*/

/* Adjacency Matrix 
         A
      /      \
     F         B
     \        /
      E - D - C
   
   Matrix is a two dimensional structure implemented using nested arrays. Storing information in rows and columns. We store edges in zeroes and ones
*/

/* Adjacency List ( Undirected graph)
        0
    /       \  
   5         1 
   \         /
    4 - 3 - 2
   [
      0 [1,5],
      1 [0,2],
      2 [1,3],
      3 [2,4],
      4 [3,5],
      5 [4,0],
   ]
   Above uses the number/numeric as an indices of the array and the value is an array of edges

         A
      /      \
     F         B
     \        /
      E - D - C

   {
      A: ['B','F'],
      B: ['A','C'],
      C: ['B','D'],
      D: ['C','E'],
      E: ['D','F'],
      F: ['E','A'],
   }
   Here above we use hash table

   Difference and big O of Adjacency Matrix and Adjacency List
   V - number of vertices
   E - number of edges

   Operation     Adjacency List     Adjacency Matrix
   Add Vertex    O(1)               O(V^2)
   Add Edge      O(1)               O(1)
   Remove Vertex O(V+E)             O(V^2)
   Remove Edge   O(E)               O(1)
   Query         O(V+E)             O(1)
   Storage       O(V+E)             O(V^2)

   Adjacency List                   Adjacency Matrix
   1. Can take up less              Takes up more space(in sparse graphs)  
   space(in sparse graphs)
   2. Faster to iterate             Slower to iterate over all edges  
   3. Can be slower to lookup       Faster to lookup specific edge
   (as we iterate over the array)       

   Adjacency List is better than Adjacency Matrix in most cases as matrix will add row and column no matter how many edges are there.
   Lot of the real world data tends to be sparse, so we can have ton of nodes, lots of vertices  byt usually  they are not all connected so Adjacency List is better for that.

*/

/* -------------------------------------------------------------------------- */
/*                       Undirected graph Implementation                      */
/* -------------------------------------------------------------------------- */

class graph {
  constructor() {
    this.adjacencyList = {};
  }

  /* ------------------------------ Adding Vertex ----------------------------- */
  addVertex(vertexName) {
    /* For now we are not handling duplicates entry in practical add some error handling */
    if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
  }

  /* ------------------------------- Adding Edge ------------------------------ */
  addEdge(vertexName1, vertexName2) {
    /* For now we are not handling duplicates entry in practical add some error handling */
    /* Also if it was directed graph we may have gone only from vertex1 to vertex2 but not the other way round */
    this.adjacencyList[vertexName1].push(vertexName2);
    this.adjacencyList[vertexName2].push(vertexName1);
  }

  /* ---------------------------- Removing an Edge ---------------------------- */
  removeEdge(vertexName1, vertexName2) {
    this.adjacencyList[vertexName1] = this.adjacencyList[vertexName1].filter(
      (v) => v !== vertexName2
    );
    this.adjacencyList[vertexName2] = this.adjacencyList[vertexName2].filter(
      (v) => v !== vertexName1
    );
  }

  /* --------------------------- Removing the Vertex -------------------------- */
  removeVertex(vertexName) {
    /* 
      1. Loop as long as there are any other vertices in the adjacency list for that vertex
      2. Inside of the loop call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
      3. Delete the key in the adjacency list for that vertex
    */
    while (this.adjacencyList[vertexName].length) {
      const adjacentVertex = this.adjacencyList[vertexName].pop();
      this.removeEdge(vertexName, adjacentVertex);
    }
    delete this.adjacencyList[vertexName];
  }

  /* -------------------------- Traversing the Graph -------------------------- */
  /*
      Traversing the graph means visiting every node  
      Unlike tree for traversing graph we need to specify the starting point
      Applications:
      1. Peer to peer networking
      2. Web crawlers
      3. Finding closest "matches" / recommendations
      4. Shortest path problems
        - GPS Navigation
        - Solving mazes
        - AI (shortest path to win the game)
  
     DEPTH FIRST SEARCH::
     - We explore one branch in depth before head to other branch
     - There is no one order for any prescribed solution given below
     
  /* -------------------------- DFS Recursive Solution ------------------------- */
  /*   Pseudo code:-
     DFS(vertex):
      if vertex is empty
          return (this is base case)
      add vertex to results list
      mark vertex as visited
      for each neighbor in vertex's neighbors:
          if neighbor is not visited:
              recursively call DFS on neighbor

          A
       /    \
      B      C
      |      |
      D------E
       \    /
         F
  */

  DFSRecursive(vertexName) {
    let result = [];
    let visited = {};
    /* Meaning of this will change inside helper function so declaring again here */
    let adjacencyList = this.adjacencyList;
    function DFSHelper(vertexName) {
      if (vertexName === null) return null;
      visited[vertexName] = true; /* { "A":true} */
      result.push(vertexName); /* ['A']*/
      /* Using foreach to maintain proper order */
      adjacencyList[vertexName].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return DFSHelper(neighbor);
        }
      });
    }
    DFSHelper(vertexName);
    return result;
  }

  /* -------------------------- DFS Iterative Solution ------------------------- */
  /* 
      Pseudo code for DFS Iterative

      DFS-Iterative(start):
          let S be a stack
          s.push(start)
          while S is not empty
            vertex = S.pop()
            add vertex to result list
            for each of vertex's neighbors, N do
                if N is not labeled as discovered:
                    label N as discovered
                    s.push(N)
  */

  DFSIterative(vertexName) {
    let stack = []; /* Last in First Out - Push and Pop way */
    let result = [];
    let visited = {};
    let currentVertex;
    stack.push(vertexName);
    visited[vertexName] = true;
    while (stack.length > 0) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  /* 
     BREADTH FIRST SEARCH::
     - Prioritize visiting all the neighbors first before moving to next level
     - We use concept of height it is the number of steps that you take to reach other node 
       so we visit nodes on same height first then move to next level
     - So we visit neighbors first then move to neighbors of neighbors
     - Order of visit does not matter
  */

  /* -------------------------- BFS Iterative Solution ------------------------- */

  BFSIterative(vertexName) {
    let queue = []; /* First in First Out - push and shift way */
    queue.push(vertexName);
    let result = [];
    let visited = {};
    let currentVertex;
    visited[vertexName] = true;
    while (queue.length > 0) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      /*  Can use .slice().reverse() to change the order right to left*/
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  /* --------------------- //TODO: BFS Recursive Solution --------------------- */
}

let g = new graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
console.log("\n\n -----  Adjacency List Original  ----- \n", g.adjacencyList);
g.addEdge("A", "B");
g.addEdge("B", "D");
g.addEdge("C", "A");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(
  "\n\n -----  Adjacency List after adding edge  ----- \n",
  g.adjacencyList
);
// g.removeEdge("Tokyo", "Dallas");
// console.log(
//   "\n\n -----  Adjacency List after removing edge  ----- \n",
//   g.adjacencyList
// );

// g.removeVertex("Tokyo");
// console.log(
//   "\n\n -----  Adjacency List after removing vertex  ----- \n",
//   g.adjacencyList
// );

console.log("\n\n -----  DFS Recursive  ----- \n", g.DFSIterative("A"));

console.log("\n\n -----  DFS Iterative  ----- \n", g.BFSIterative("A"));

/* -------------------------------------------------------------------------- */
//                    TODO: Directed graph Implementation                     //
/* -------------------------------------------------------------------------- */
