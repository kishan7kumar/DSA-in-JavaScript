/*  
    ! Optional Challenge Four
   - Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
    - isSubsequence('hello', 'hello world'); // true
    - isSubsequence('abc', 'acb'); // false (order matters)
*/

// - Time Complexity is O(N) and Space Complexity is O(1)
function isSubsequence(targetStr, str2) {
  let i = 0;
  if (!str1) return true;
  for (const char of str2) {
    if (char === targetStr[i]) {
      i++;
    }
    if (i === targetStr.length) {
      return true;
    }
  }
  return false;
}

function isSubsequenceRecursive(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0])
    return isSubsequenceRecursive(str1.slice(1), str2.slice(1));
  return isSubsequenceRecursive(str1, str2.slice(1));
}

console.log(isSubsequence("sing", "sting"));
