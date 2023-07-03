/**
 * *Helper functions defined below
 */

function getDigit(num, place) {
  // * Here abs is used to handle negative numbers
  return Math.round(Math.abs(num) / 10 ** place) % 10;
}

function digitCounter(num) {
  return num.toString().length;
}

function mostDigit(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (digitCounter(arr[i]) > counter) {
      counter = digitCounter(arr[i]);
    }
  }
  return counter;
}

function flattenArrays(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flattenArrays(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

/**
 *
 *  * Radix Sort Methods
 *  * Time Complexity is O(nk), here n is the number of elements we are sorting and k is the word size of number
 */

function radixSort(arr) {
  //* this will give the number of steps we have to loop over to fill the buckets
  let digitsCountOfLargestNumber = mostDigit(arr);
  for (let i = 0; i < digitsCountOfLargestNumber; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }
    // arr = flatten(digitBuckets);
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

console.log("Original Array:-  [12, 222, 2122, 10, 343]");
console.log("Sorted Array:- ", radixSort([12, 222, 100, 2122, 10, 343]));
