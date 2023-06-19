/*  
    ! Optional Challenge Two
    - Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
    - areThereDuplicates(1, 2, 3) // false
*/

function areThereDuplicatesUsingFrequency(...args) {
  let obj = {};
  for (let index = 0; index < args.length; index++) {
    if (obj[args[index]]) return true;
    obj[args[index]] = 1;
  }
  return false;
}

function areThereDuplicatesUsingTwoPointers(...args) {
  // -first the array needs to be sorted
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

function areThereDuplicatesUsingSet(...args) {
  return new Set(args).size !== args.length;
}

console.log(areThereDuplicatesUsingSet(1, 2, 3, 1));
