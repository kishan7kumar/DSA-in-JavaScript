function mergeTwoSortedArray(arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  // - If j is exhausted, push all elements of arr1
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  // -  If i is exhausted, push all elements of arr1
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

console.log(mergeTwoSortedArray([1, 2, 10, 20], [3, 4]));
