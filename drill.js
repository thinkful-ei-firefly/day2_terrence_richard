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

function min(arr) {
  if (!arr) {
    return null;
  }
  let currentMin = arr[0];
  let counter = 0;
  while(counter < arr.length) {
    if (currentMin > arr[counter]) {
      currentMin = arr[counter]; 
    }
    counter += 1;
  }
  return currentMin;
}

console.log(min([9,5,7,3,4])); //-> 3