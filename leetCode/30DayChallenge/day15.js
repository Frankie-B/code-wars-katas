// Product of Array Except Self - https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3300/
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = [];
  const size = nums.length;
  // calculate product from the left side
  for (let i = 0, acc = 1; i < size; i++) {
    output[i] = acc;
    acc *= nums[i];
  }
  // calculate product from the right side
  for (let i = size - 1, acc = 1; i >= 0; i--) {
    output[i] *= acc;
    acc *= nums[i];
  }

  return output;
};
