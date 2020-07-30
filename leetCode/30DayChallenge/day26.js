// Longest Common Subsequence - https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3311/

// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

// Example 1:

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Constraints:

//     1 <= text1.length <= 1000
//     1 <= text2.length <= 1000
//     The input strings consist of lowercase English characters only.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function(text1, text2) {
    const len1 = text1.length;
    const len2 = text2.length;
    const dp = [];
    for (let i = 0; i <= len1; i++) {
        dp[i] = new Array(len2 + 1).fill(0);
    }
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[len1][len2];
};

// clean solution
// var longestCommonSubsequence = function (text1, text2) {
//   const dp = [];
//   let m = text1.length;
//   let n = text2.length;

//   for (let i = 0; i <= m; i++) {
//     dp[i] = new Array(n + 1).fill(0);
//   }

//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
// two  possible scenarioes:
// 1. the current char of text1 and text2 does not match
// 2. the current char of text1 and text2 matches

// if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
// check left and top for longer subsequence length
//   dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
// } else {
// check diag for prev longest subsequence length and add 1
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       }
//     }
//   }

//   return dp[m][n];
// };

// clean two
// The Idea

//     Use dynamic programming bottom-up approach
//     If two characters are the same, the current LCS is the diagonal(previous) + 1
//     Otherwise the current LCS is maximum from left, top and diagonal

// var longestCommonSubsequence = function(text1, text2) {
//     let dp = new Array(text1.length+1).fill(0).map(()=>new Array(text2.length+1).fill(0));
//     for (let i=1;i<dp.length;i++) {
//         for (let j=1;j<dp[0].length;j++) {
//             if (text1[i-1] == text2[j-1]) {
//                 dp[i][j] = dp[i-1][j-1] + 1;
//             } else {
//                 dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
//             }
//         }
//     }

//     return dp[dp.length-1][dp[0].length-1];
// };
