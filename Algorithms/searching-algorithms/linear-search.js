// - Basic Algorithm with time complexity O(N)

function linearSearch(arr, value) {
  for (const item in arr) {
    if (arr[item] === value) {
      return parseInt(item);
    }
  }
  return -1;
}

console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
