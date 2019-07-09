'use strict';

/*function average(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    var avg = total / numbers.length;
    return avg;
  } */

  function average(arr){
      let total=0;
      arr.forEach((function (num)  {
          total += num;          
      }));
      let avg= total/arr.length;
      return avg;
  }

  console.log(average([2,3,4,5,6,]));
  
  