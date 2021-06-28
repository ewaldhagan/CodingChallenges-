//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
    total = 0;
    for (a of arr) {
      if (a > 0) {
        total += a;
      }
    }
    return total;
  }