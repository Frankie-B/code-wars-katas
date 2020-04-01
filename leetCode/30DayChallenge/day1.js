// Single Number - https://leetcode.com/

/**
 *Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*
 **/

var singleNumber = function(nums) {
  let unique = [];
  for (let i = 0; i < nums.length; i++) {
    if (unique[nums[i]] === undefined) {
      unique[nums[i]] = 1;
    } else {
      return 'Already exists!';
    }
  }
  return unique;
};

singleNumber(2, 2, 1);
