/* 
 - This is Multiple Pointers Coding Pattern
 - Time Complexity:- O(N)
 - Space Complexity:- O(1) 
*/


// function countUniqueValues(arr) {
//   let flag = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index + 1] !== arr[index]) {
//       flag += 1;
//     }
//   }
//   return flag;
// }

function countUniqueValues(arr) {
  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 0, 2, 2]));
