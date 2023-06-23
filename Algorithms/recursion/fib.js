//  - Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib1(num) {
  let newArr = [1, 1];
  if (num <= 2) return 1;
  function helper(arrInput) {
    let len = newArr.length;
    if (newArr.length === num) return newArr;
    newArr.push(arrInput[len - 1] + arrInput[len - 2]);
    helper(newArr);
  }
  helper(newArr);
  return newArr.pop();
}

function fib2(n) {
  if (n <= 2) return 1;
  return fib2(n - 1) + fib2(n - 2);
}

console.log(fib2(35));
