/* 
  - Divide and Conquer Pattern 
    - Involves dividing dataset(Array, string, linked list) into small chunks and then repeating a process with a  subset of data
 */

// - Binary Search
//   - Time Complexity = log(O(N))
function search(arr, val) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  while (minIndex <= maxIndex) {
    let middleIndex = Math.ceil((minIndex + maxIndex) / 2);
    if (arr[middleIndex] < val) {
      minIndex = middleIndex + 1;
    } else if (arr[middleIndex] > val) {
      maxIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
}

console.log(search([1, 2, 3, 4, 7, 9], 7));
