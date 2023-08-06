/* 
   Fibonacci Series
   Fib(n) = Fib(n-1) + Fib(n-2)
   Fib(0) = 0
   Fib(1) = 1
   Fib(2) = 1

           fib(5)
        /           \
    fib(4)    +    fib(3)
    /     \       /     \   
  fib(3)+fib(2)  fib(2)+fib(1)
  /   \
fib(2)+fib(1)
          
             5
        /           \     
      3               2
    /   \           /   \     
  2       1       1       1
/   \
1    1  


*/

/* --------------------------- Recursive Solution --------------------------- */
/* Time complexity: O(2^N) approx !! Very Bad bcs we calculate values repeatedly */

function fib(n) {
  /* base case that allows recursion to stop */
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log("\n\n -----  fib(3) Recursive  ----- \n", fib(3));

/* --------------------------- Memoization Solution --------------------------- */
/* Time Complexity: O(N) Much better !! */
function fibMemoization(n) {
  let memo = {};
  function fib(n) {
    /* Short circuiting */
    if (n in memo) return memo[n];
    /* base case that allows recursion to stop */
    if (n <= 2) return 1;
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }
  return fib(n);
}

console.log("\n\n -----  fib(100) Memoization  ----- \n", fibMemoization(100));

/* --------------------------- Tabulation Solution --------------------------- */
/* 
   Tabulation::

   Storing the result of a previous result in a "table" (usually an array)
   Usually done using iteration
   Better space complexity can be achieved using tabulation
   Bottom Up approach
*/

function fibTabulation(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log("\n\n -----  fib(100) Tabulation  ----- \n", fibTabulation(100))