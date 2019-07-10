'use strict';
// reduce
const words = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const wordsAry = words.split(' ');
const decoded = wordsAry.reduce((decodedString,word) => {
  if(word.length === 3) {
    return decodedString + ' ';
  }
  else {
    return decodedString + word[word.length-1].toUpperCase();
  }
}, ''); // set '' as the initiaValue

console.log(decoded);