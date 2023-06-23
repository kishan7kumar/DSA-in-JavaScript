// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(number, raise) {
  if (raise === 0) return 1;
  return number * power(number, raise - 1);
}

console.log(power(2, 4));
