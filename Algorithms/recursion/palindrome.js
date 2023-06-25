// - Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
/**
 * isPalindrome('awesome') // false
 * isPalindrome('foobar') // false
 * isPalindrome('tacocat') // true
 * isPalindrome('amanaplanacanalpanama') // true
 * isPalindrome('amanaplanacanalpandemonium') // false
 */

function isPalindrome(str) {
  console.log(str);
  if (str[0] !== str[str.length - 1]) {
    return false;
  } else if (str.length > 3) {
    return isPalindrome(str.substring(1, str.length - 1));
  } else {
    return true;
  }
}

console.log(isPalindrome("amanaplanacanalpandemonium"));
