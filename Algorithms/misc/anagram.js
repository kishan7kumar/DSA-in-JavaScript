// NOTE: O(N)
// Frequency Counting Pattern
// iceman, cinema

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frequencyCounter1 = {};

  for (const char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (const key of str2) {
    if (!frequencyCounter1[key]) {
      return false;
    } else {
      frequencyCounter1[key] -= 1;
    }
  }
  return true;
}

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (const char of str1) {
//     frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
//   }
//   for (const char of str2) {
//     frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
//   }
//   for (const key in frequencyCounter1) {
//     if (!(key in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

console.log(validAnagram("rat", "tas"));
