// Counting Elements - https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3289/

/**
 * Given an integer array arr, count element x such that x + 1 is also in arr.

If there're duplicates in arr, count them seperately.
 */

const countElements = function(arr) {
    let count = 0;
    const arr2 = [...arr];
    arr.forEach(n => {
        if (arr2.includes(n + 1)) {
            count++;
        }
    });
    return count;
};

countElements;
[1, 2, 3];
