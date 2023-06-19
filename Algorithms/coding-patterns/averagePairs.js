/*  
    ! Optional Challenge Three
   - Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target..
    - averagePair([1,2,3],2.5) // true
*/

function averagePair(arr, targetAvg) {
  if (arr.length === 0) return false;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
