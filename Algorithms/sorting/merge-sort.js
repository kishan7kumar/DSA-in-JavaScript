/**
 *  Merge Sort Methods
 *  Time Complexity is O(n*log(n))
 *  here log(n) comes from the decomposition and n comes the comparisons to perform the merging steps
 *  Space Complexity is O(n)
 */

function mergeTwoSortedArray(arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let midPoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midPoint));
  let right = mergeSort(arr.slice(midPoint));
  return mergeTwoSortedArray(left, right);
}

console.log(mergeSort([1, 2, 20, 4, 5]));
