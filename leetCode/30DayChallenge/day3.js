//  Maximum Subarray - https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3285/

/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let sum = 0;
    let max = Number.NEGATIVE_INFINITY;
    const len = nums.length;
    let i;

    for (i = 0; i < len; i++) {
        sum += nums[i];

        max = Math.max(sum, max);

        if (sum < 0) {
            sum = 0;
        }
    }

    return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
