class Node {
  constructor(value, priority) {
    /* Value can be string, number or other doesn't matter */
    this.value = value;
    /* Lower values has high priority so 1 > 2 */
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    if (this.values.length !== 0) {
      let index = this.values.length - 1;
      let parentIndex = Math.floor((index - 1) / 2);

      while (
        parentIndex >= 0 &&
        this.values[index].priority < this.values[parentIndex].priority
      ) {
        /* Swap the parent and child element */
        let temp = this.values[index];
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = temp;
        /* Update the index and parentIndex parent moves up*/
        index = parentIndex;
        /* Update the parentIndex; search for child up the tree*/
        parentIndex = Math.floor((index - 1) / 2);
      }
    }
    return this.values;
  }

  /* Right now the dequeue logic does not consider for the case of same priority level if that happens we can add a new parameter in node class like date or time */
  dequeue() {
    /* Swap the root and the last element */
    let maxElement = this.values[0];
    let endElement = this.values.pop();
    /* This is a bubble up logic */
    if (this.values.length > 0) {
      this.values[0] = endElement;
      let parentIndex = 0;
      while (true) {
        let leftIndex = 2 * parentIndex + 1;
        let rightIndex = 2 * parentIndex + 2;
        let swap = null;
        if (leftIndex < this.values.length) {
          if (
            this.values[leftIndex].priority < this.values[parentIndex].priority
          ) {
            swap = leftIndex;
          }
        }
        if (rightIndex < this.values.length) {
          if (
            this.values[rightIndex].priority <
              this.values[parentIndex].priority &&
            this.values[rightIndex].priority < this.values[leftIndex].priority
          ) {
            swap = rightIndex;
          }
        }
        if (swap === null) break;
        this.values[parentIndex] = this.values[swap];
        this.values[swap] = endElement;
        parentIndex = swap;
      }
    }
    return maxElement;
  }
}

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
