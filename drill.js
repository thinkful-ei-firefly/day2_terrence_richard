'use strict';

function max(arr) {
  if (!arr) {
    return null;
  }
  let currentMax = arr[0];
  let counter = 0;
  while(counter < arr.length) {
    if (currentMax < arr[counter]) {
      currentMax = arr[counter]; 
    }
    counter += 1;
  }
  return currentMax;
}

console.log(max([0,5,7,3,4])); //-> 7
console.log('something');