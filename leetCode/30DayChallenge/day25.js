// Jump Game - https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3310/

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  var jump = 0;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    jump = Math.max(nums[i], jump);
    if (jump === 0 && i !== len - 1) return false;
    jump--;
  }
  return true;
};

// clean solution
// var canJump = function(nums) {
//     let last = nums.length - 1;
//     for (let i = last - 1; i >= 0; i--) {
//         if (i + nums[i] >= last) {
//             last = i;
//         };
//     };
//     return last === 0;
//};

// solution two
//
//   @param {number[]} nums
//  @return {boolean}
//
// let canJump = function(nums) {

//     let requiredSteps = 1;
//     for (let i=nums.length-2; i>=0; i--) {
//         if (nums[i] >= requiredSteps) {
//             requiredSteps = 1;
//         } else {
//             requiredSteps++;
//         }
//     }
//     if (requiredSteps === 1) return true;
//     return false;
// };
