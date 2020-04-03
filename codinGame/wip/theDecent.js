// The Descent - https://www.codingame.com/ide/puzzle/the-descent

/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

// game loop
while (true) {
  var max = 0;
  var imax = 0;
  for (var i = 0; i < 8; i++) {
    var mountainH = parseInt(readline()); // represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
    if (mountainH > max) {
      max = mountainH;
      imax = i;
    }
  }

  console.log(imax);
}
