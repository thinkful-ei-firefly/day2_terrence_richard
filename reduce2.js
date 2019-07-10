'use strict';

let string = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let stuff = string.split(' ').reduce(function(acc, str) {
  if (str.length === 3) {
    return acc + ' ';
  } else {
    return acc + str[str.length-1].toUpperCase();
  }
}, '');

console.log(stuff);