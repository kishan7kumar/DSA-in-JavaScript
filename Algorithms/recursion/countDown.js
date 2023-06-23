function countDown(num) {
  if (num <= 0) { 
    //- Base Case for this function
    console.log("All done !");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(4);
