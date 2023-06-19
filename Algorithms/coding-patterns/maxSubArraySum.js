/*  
    ! Optional Challenge Four
   - Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
    - maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
*/

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  let sum = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    temp = temp + arr[i];
  }
  sum = temp;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = temp - arr[i] + arr[i + num];
    if (temp > sum) sum = temp;
  }
  return sum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
