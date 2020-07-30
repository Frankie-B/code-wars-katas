// Minimum Path Sum - https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3303/

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i !== 0 && j !== 0) grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
            else if (i !== 0) grid[i][j] += grid[i - 1][j];
            else if (j !== 0) grid[i][j] += grid[i][j - 1];
        }
    }
    return grid[height - 1][width - 1];
};
