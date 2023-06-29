// - Time Complexity O(N^2)
function searchIt(mainStr, patternStr) {
  let matchCount = 0;
  for (let i = 0; i < mainStr.length; i++) {
    let count = 0;
    for (let j = 0; j < patternStr.length; j++) {
      if (mainStr[i] === patternStr[j]) {
        i++;
        count += 1;
      } else {
        break;
      }
      if (count === patternStr.length) matchCount++;
    }
  }
  return matchCount;
}

// - Time Complexity O(N)
function searchPatternString(mainStr, patternStr) {
  let matchCount = 0;
  let j = 0;
  for (let i = 0; i < mainStr.length; i++) {
    if (mainStr[i] === patternStr[j]) {
      j++;
      if (j === patternStr.length) matchCount++;
    } else {
      j = 0;
    }
  }
  return matchCount;
}

console.log(searchPatternString("lol reaid lolsd", "lol"));
