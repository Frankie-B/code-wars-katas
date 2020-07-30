// Single Number - https://leetcode.com/

/**
 *Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*
 * */

const singleNumber = function(nums) {
    const unique = {};
    nums.forEach(num => {
        unique[num] ? unique[num]++ : (unique[num] = 1);
    });

    for (let i = 0; i < nums.length; i++) {
        if (unique[nums[i]] === 1) {
            return nums[i];
        }
    }
};

singleNumber(2, 2, 1);

// space efficient

// var singleNumber = function(nums) {

//     for (let i = 0; i < nums.length; i++){
//         let count = 1
//         for (j = 0; j < nums.length; j++){
//             if (i !== j && nums[i] === nums[j]){
//                 count++
//             }

//         }
//         if (count === 1) return nums[i]
//     }
// };
