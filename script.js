function sum(){
  arr = [12, 10, 7, 33];
  var res = 0;
  var summa;
  var i = 0;

  while (i < arr.length) {
    summa = arr[i] + arr[i + 1];
    if (summa > res) {
      res = summa;
    }
    i++;
  }
  return res;
}

alert(sum());
