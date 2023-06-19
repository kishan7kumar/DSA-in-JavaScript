function count(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
}

function count2(n) {
  return (n * (n + 1)) / 2;
}

let time1 = performance.now();
count2(1000000000);
let time2 = performance.now();
console.log(`time elapsed: ${time2 - time1} s`);
