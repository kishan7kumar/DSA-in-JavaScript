### Definition of dynamic programming

Dynamic programming is a method for solving a complex problem by breaking it down into a collection of simpler sub problems, solving each of those sub problems just once, and storing their solutions using a memory-based data structure (array, map,etc).

### When to use dynamic programming

It only works on problems with optimal substructure and overlapping sub problems.

### Overlapping sub problems

A problem is said to have overlapping sub problems if it can be broken down into sub problems which are reused several times. Example: Fibonacci series and example for No overlapping sub problems: Merge sort. However a special case in merge sort [10,24,10,24]

### Optimal substructure

A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its sub problems. Example: Shortest path problem. here every subpath are also the smallest path Example for no optimal substructure: Longest simple non repeating path problem.

### Memoization
Storing the results of expensive function calls and returning the cached result when the same inputs occur again.