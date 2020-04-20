// Number of Islands - https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3302/
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || !grid.length || !grid[0] || !grid[0].length) return 0;

  let islands = 0;
  const [width, height] = [grid.length, grid[0].length];
  const [deltaX, deltaY] = [
    [1, 0, -1, 0],
    [0, -1, 0, 1],
  ];

  const dfs = (grid, x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= height || grid[x][y] !== '1')
      return;
    grid[x][y] = 'x';
    for (let i = 0; i < deltaX.length; i++) {
      dfs(grid, x + deltaX[i], y + deltaY[i]);
    }
  };

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        islands++;
      }
    }
  }
  return islands;
};
