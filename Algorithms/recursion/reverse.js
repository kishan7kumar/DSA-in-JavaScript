// - Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// - reverse('awesome') // 'emosewa'
// - reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  let newArr = [];
  if (str.length === 1) {
    return str;
  }
  newArr.push(str[str.length - 1]);
  newArr = newArr.concat(reverse(str.substring(0, str.length - 1)));
  return newArr.join("");
}

console.log(reverse("awesome"));
