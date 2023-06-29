// - It works only on sorted arrays with Time Complexity of O(log(N)) base is 2 
// - So 2 to the power of steps for N elements

function binarySearch(arr, value) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let index = 0;
  while (leftPointer <= rightPointer) {
    index = Math.ceil((leftPointer + rightPointer) / 2);
    if (arr[index] > value) rightPointer = index - 1;
    else if (arr[index] < value) leftPointer = index + 1;
    else return index;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 6, 7, 8, 9], 9));
