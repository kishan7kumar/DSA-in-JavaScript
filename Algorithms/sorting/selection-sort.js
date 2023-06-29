/**
 * Selection Sort
 * Time Complexity of O(N^2)
 * This technique reduces the number of swapping when compared to bubble sort
 */

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let smallest;
  for (let i = 0; i < arr.length; i++) {
    smallest = i; //always the beginning of the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) smallest = j;
    }
    if (smallest !== i) swap(arr, i, smallest);
  }
  return arr;
}

console.log(selectionSort([6, 8, 1, 2, 2, 3]));
