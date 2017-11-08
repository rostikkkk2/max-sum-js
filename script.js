function sum(nums){
  var max = 0;
  var summa;
  var i = 0;

  while (i < nums.length) {
    summa = nums[i] + nums[i + 1];
    if (summa > max) {
      max = summa;
    }
    i++;
  }
  return max;
}

alert(sum([4, 1, 20, 2]));
