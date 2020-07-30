// Maximal Square - https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3312/

// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input:

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4

/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function(matrix) {
    const rows = matrix.length;
    const cols = rows ? matrix[0].length : 0;
    let max = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const left = col === 0 ? 0 : matrix[row][col - 1];
            const up = row === 0 ? 0 : matrix[row - 1][col];
            const back = row && col ? matrix[row - 1][col - 1] : 0;
            if (matrix[row][col] == 1) {
                matrix[row][col] = Math.min(left, up, back) + matrix[row][col] * 1;
            } else {
                matrix[row][col] = 0;
            }
            max = max > matrix[row][col] ? max : matrix[row][col];
        }
    }
    return max * max;
};

// Super fast solution :
// function maximalSquare(matrix) {
// max square we've seen
//   let max = 0;

// create empty dp array matching matrix size
//   const dp = [...Array(matrix.length)].map((e) => Array(matrix[0].length));

// iterate i by j thru matrix
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
// check if this is first row, or col
//       if (i === 0 || j === 0) {
// check if it's a 1 to update max square to 1
//         if (matrix[i][j] === '1') {
//           dp[i][j] = 1;
//           max = Math.max(max, 1);
//         } else {
// just write a 0 to dp
//           dp[i][j] = 0;
//         }
//       } else {
// check if 1
//         if (matrix[i][j] === '1') {
// number at this dp cell, is min of left, top, top left + 1
// this ensures, will only be a square if all of those are 1s
//           dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
// update max if necessary
//           max = Math.max(max, dp[i][j]);
//         } else {
// just write a 0 to dp
//           dp[i][j] = 0;
//         }
//       }
//     }
//   }

// return max squared (cuz its a square :))
//   return max ** 2;
// }
