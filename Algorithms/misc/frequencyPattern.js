/* // - Time Complexity O(N^2)
function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let flag = 0;
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] == arr1[i] * arr1[i]) {
        arr2.splice(j, 1);
      } else {
        return false;
      }
    }
  }
  return true;
}
*/

/* // - Time Complexity O(N^2)
function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i] ** 2) === -1) {
      return false;
    } else {
      arr2.splice(i, 1);
    }
  }
  return true;
}
*/

// - Time Complexity O(N)
// Frequency Counter Pattern
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const item of arr1) {
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
  }
  for (const item of arr2) {
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
  }
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 1], [1, 4, 4]));
