// - Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  let newObj = Object.assign({}, obj);
  let resultArray = [];
  function helper(newObj) {
    for (const property in newObj) {
      if (newObj[property].constructor === Object) {
        helper(newObj[property]);
      } else {
        if (typeof newObj[property] === "string") {
          resultArray.push(newObj[property]);
        }
      }
    }
  }
  helper(newObj);
  return resultArray;
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
