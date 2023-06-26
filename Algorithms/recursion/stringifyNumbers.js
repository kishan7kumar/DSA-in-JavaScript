// - Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

let obj = {
  num: 1,
  test: {},
  data: {
    val: [4, 4, 4],
    info: {
      isRight: true,
      random: 66,
    },
  },
};

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
  //   let newObj = { ...obj };
  let newObj = Object.assign({}, obj);
  function helper(newObj) {
    for (const property in newObj) {
      if (newObj[property].constructor === Object) {
        helper(newObj[property]);
      } else {
        if (typeof newObj[property] === "number") {
          newObj[property] = newObj[property].toString();
        }
      }
    }
  }
  helper(newObj);
  return newObj;
}

console.log(stringifyNumbers(obj));
