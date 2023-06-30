
// Pivot function to return a pivot index
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex += 1; // here swap index is updated this is the reason we are able to swap values in between pivot and the compared items
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

/* Main sort function 
* Time Complexity: O(N*log(N))
* As the value of N grows we have to make log(N) decompostions Ex:- 32 elements will need 5 decompositions bcs 2^5=32
* Worst Case is O(N^2), if the array is sorted already or when pivot is the minimum or maximum item in the array 
* Taking middle element as pivot and avoiding extremes element is always a good choice
*/
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left sorting
    quickSort(arr, left, pivotIndex - 1);
    // right sorting
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
