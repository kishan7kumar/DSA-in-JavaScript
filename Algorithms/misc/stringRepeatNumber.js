// function chartCount(str) {
//   let resultObj = {};
//   let re = new RegExp(/[a-z0-9]/);
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (re.test(char)) {
//       if (resultObj.hasOwnProperty(char)) {
//         resultObj[char]++;
//       } else {
//         resultObj[char] = 1;
//       }
//     }
//   }
//   return resultObj;
// }

function chartCount(str) {
  let obj = {};
  for (let char of str) {
    // - Also can use /[a-z0-9]\.test(char) inside if condition
    if (isAlphanumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphanumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  } else {
    return true;
  }
}

const ans = chartCount("helLo 1234@@");
console.log(ans);
