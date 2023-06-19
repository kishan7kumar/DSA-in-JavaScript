/* 
  - SLIDING WINDOW PATTERN
    - This pattern involves creating a window which can either be an array or number from one position to another
    - Useful for keeping track of a subset of data in array/string etc.
 */

// - Naive Solution with Time Complexity of O(N^2) and Space Complexity of O(1)
function maxSum(arr, num) {
  if (num > arr.length) return null;
  let max = -Infinity;
  let temp;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (var j = 0; j < num; j++) {
      temp = temp + arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
}

// - Optimized Solution with Time Complexity of O(N) and Space Complexity of O(1)
// - We are adding one and subtracting one so window is sliding along the array
function maxSumRefactored(arr, num) {
  if (num > arr.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSumRefactored([1, 2, 3, 6, 4, 2, 9, 3], 2));
