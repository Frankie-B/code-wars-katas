// Subarray Sum Equals K - https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3307/

// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input:nums = [1,1,1], k = 2
// Output: 2

// Note:

//     The length of the array is in range [1, 20,000].
//     The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let result = 0;
  let sum = 0;
  const sumCount = new Map([[0, 1]]);

  for (let num of nums) {
    sum += num;
    result += sumCount.get(sum - k) || 0;

    sumCount.set(sum, (sumCount.get(sum) || 0) + 1);
  }

  return result;
};
