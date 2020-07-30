// Valid Parenthesis String - https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3301/
// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
// Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True
// Note:
// The string size will be in the range [1, 100].

/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function(s) {
    let left = 0;
    let right = 0;
    let wild = 0;
    const copyArr = [[0, 0, 0]];
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === '(') left++;
        else if (s[i - 1] === ')') right++;
        else wild++;
        copyArr.push([left, right, wild]);
    }
    (left = 0), (right = 0), (wild = 0);
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')') {
            const val = 1 + copyArr[i][1] - copyArr[i][0] - copyArr[i][2];
            if (val > 0) return false;
            right++;
        } else if (s[i] === '(') {
            const val = 1 + left - right - wild;
            if (val > 0) return false;
            left++;
        } else wild++;
    }
    return true;
};
