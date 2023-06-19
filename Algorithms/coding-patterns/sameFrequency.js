/*  
    ! Optional Challenge One
    - Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
    - Your solution MUST have the following complexities:
     - Time: O(N)
*/

function sameFrequency(num1, num2) {
  // - Converting numbers to strings first
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  // - return if length of both number are not equal
  if (strNum1.length !== strNum2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const item of strNum1) {
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
  }
  for (const item of strNum2) {
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
  }
  for (const key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(22,222));
