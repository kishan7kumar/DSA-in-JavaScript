// -> Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

//let words = ["i", "am", "learning", "recursion"];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(wordsArray) {
  let newArray = [];
  if (wordsArray.length === 0) return wordsArray;
  newArray.push(wordsArray[0].toUpperCase());
  // - Concat methods is used to join multiple arrays together
  newArray = newArray.concat(capitalizeWords(wordsArray.slice(1)));
  return newArray;
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
