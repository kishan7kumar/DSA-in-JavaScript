/* 
    Dijkstra Algorithm
    - One of the most famous and widely used algorithms around
    - Finds the shortest path between two vertices on a graph

    Approach:
    1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
    2. Once we've moved to the node we're going to visit, we look at each of its neighbors
    3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
    4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node
     
    Applications:
    1. GPS - finding fastest route
    2. Network Routing - finds open shortest path for data
    3. Biology - used to model the spread of viruses among humans
    4. Airline tickets - finding cheapest route to your destination

        4
    A -------- B
2  /  2       3  \ 3
   C----- D ----- E
    \    | 1     /
   4 \   |     /    
      \  |   / 1
         F
*/

/* ----------------------------- Weighted Graph ----------------------------- */

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    /* If the vertex is not present in the adjacency list then add it */
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
    /* If the graph is undirected then add the reverse edge as well */
    this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
  }

  shortestPath(startingVertex, endingVertex) {
    /* from each vertex we store the shortest distance from current start point */
    let distances = {};
    let previous = {};
    let nodes = new PriorityQueue();
    let smallest;
    let path = [];
    /* Initializing value in the distance object */
    for (let vertex in this.adjacencyList) {
      if (vertex === startingVertex) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    /*  as long as something to visit */
    while (nodes.values.length > 0) {
      smallest = nodes.dequeue().val;
      if (smallest === endingVertex) {
        /* Building up the path */
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let index in this.adjacencyList[smallest]) {
          let neighbor = this.adjacencyList[smallest][index];
          /* calculate new distance to neighboring node */
          let candidate = distances[smallest] + neighbor.weight;
          let nextNeighbor = neighbor.node;
          if (candidate < distances[nextNeighbor]) {
            /* updating new smallest distance to neighbor */
            distances[nextNeighbor] = candidate;
            /* updating previous - how we got to neighbor */
            previous[nextNeighbor] = smallest;
            /* enqueue in priority queue with new priority */
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

/* Simple PQ but not idea as time complexity is O(N*log(N)) */
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  /* Gives current small priority */
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.shortestPath("A", "E"));
