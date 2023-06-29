/**
 *
 * Insertion Sort Technique
 * Time Complexity:- O(N^2)
 */

function insertionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < arr.length - 1; i++) {
    let currentVal = i;
    for (let j = i + 1; j > 0 || arr[j] > arr[currentVal]; j--) {
      if (arr[j] < arr[currentVal]) swap(arr, j, currentVal);
      currentVal--;
    }
    console.log(arr);
  }
  return arr;
}

function inserS(array) {
  for (let i = 0; i < array.length; i++) {
    let currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
    console.log(array);
  }
}

console.log(insertionSort([1, 2, 3, 4, -1, 34, 45, 0]));
console.log("*****************");
console.log(inserS([1, 2, 3, 4, -1, 34, 45, 0]));
