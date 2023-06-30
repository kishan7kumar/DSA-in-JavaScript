function pivot(arr, start, end) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let pivotIndex = start;
  while (start < end) {
    if (arr[start] < arr[0]) {
      pivotIndex += 1;
      swap(arr, start, pivotIndex);
    }
    start++;
  }
  swap(arr, 0, pivotIndex);
  return arr;
}
let arr = [28, 4, 11, 16, 1, 14, 18, 41, 36];
let arr2 = [26, 23, 27, 44, 17, 47, 39, 42, 43, 1];
console.log(pivot(arr2, 0, arr2.length));
