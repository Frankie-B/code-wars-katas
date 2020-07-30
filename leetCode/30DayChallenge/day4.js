// Move Zeroes - https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3286/

/**
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * */

const moveZeroes = function(nums) {
    x = 0;
    let temp;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            temp = nums[i];
            nums[i] = nums[x];
            nums[x] = temp;
            x += 1;
        }
    }
};

moveZeroes[(0, 1, 0, 3, 12)];
