function getDigit(num, place) {
    // Here abs is used to handle negative numbers
    return Math.round(Math.abs(num) / 10 ** place) % 10;
  }
  
  function digitCounter(num) {
    let counter = 0;
    while (num > 0) {
      counter++;
      num = Math.round(num / 10);
    }
    return counter;
  }
  
  console.log(digitCounter(1143));
  