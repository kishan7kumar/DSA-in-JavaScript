/*  
    ! Optional Challenge Five
   - Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters..
    - findLongestSubstring('rithmschool') // 7
*/

function findLongestSubstring(str) {
  let startPointer = 0;
  let endPointer = 0;
  let maxLen = 0;
  let tempArray = [];
  if (str.trim().length === 0) {
    return 0;
  }
  while (endPointer < str.length) {
    if (tempArray.indexOf(str[endPointer]) === -1) {
      tempArray.push(str[endPointer]);
      endPointer = endPointer + 1;
    } else if (startPointer > str.length - 1) {
      break;
    } else {
      maxLen = Math.max(maxLen, endPointer - startPointer);
      startPointer = startPointer + 1;
      endPointer = startPointer;
      tempArray = [];
    }
  }
  return (maxLen = Math.max(maxLen, endPointer - startPointer));
}

console.log(findLongestSubstring("    "));
