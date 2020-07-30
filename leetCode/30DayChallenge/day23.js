// Bitwise AND of Numbers Range - https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3308/

// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

// Example 1:

// Input: [5,7]
// Output: 4

// Example 2:

// Input: [0,1]
// Output: 0

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const rangeBitwiseAnd = function(m, n) {
    let count = 0;
    while (m !== n) {
        m >>= 1;
        n >>= 1;
        count++;
    }
    return (m <<= count);
};

// clever solution
// var rangeBitwiseAnd = function (m, n) {
//   let c = 0;
//   let ret = 0;
//   for (let i = 0; i < 32; ++i) {
//     const t = 1 << i;
//     if (m & t) {
//       if (m + c + 1 > n) {
//         ret |= t;
//       }
//     } else {
//       c |= t;
//     }
//   }
//   return ret;
// };

// clever solution two
// var rangeBitwiseAnd = function (m, n) {
//   let count = 0;

//   while (m != n) {
//     count++;
//     m >>= 1;
//     n >>= 1;
//   }

//   return m << count;
// };
