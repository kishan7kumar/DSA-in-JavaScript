/* 
-   Multiple pointer Pattern
-   Time Complexity is O(N)
-   Space Complexity is O(1)
-   Print first pair to have sum as 0
-   Working from left side and right side and coming to the middle
*/

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 4, 5]));
