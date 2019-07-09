'use strict';
let turtleMoves=[[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

//[[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]
let filteredMoves = turtleMoves.filter(function(moves) {
  if (moves[0] >= 0 && moves[1] >= 0) {
    return moves;
  }
});
console.log(filteredMoves);


//[[0, 0], [0, 5], [3, 2]]
//map array -> array
let mapMoves = filteredMoves.map(function(arr) {
  return arr[0] + arr[1];
});
console.log(mapMoves);

// [0, 5, 5]

mapMoves.forEach((moves, idx) => console.log(`Movement #${idx+1}: ${moves} steps.`));

//Movement #1: 0 steps
//Movement #2: 5 steps
//Movement #2: 5 steps