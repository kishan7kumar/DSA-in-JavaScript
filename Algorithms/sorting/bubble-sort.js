// function swap(arr, index1, index2) {
//   let temp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
//   return arr;
// }

function bubbleSort(arr) {
  // - if the given array is almost sorted, then we do not need to go through the array again, so we break out of the loop
  let noSwaps = true;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  // - below logic reduces the comparison for j as the last part of array is sorted
  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {   
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([6, 8, 1, 2, 3, 10, 4]));
