//  Backspace String Compare - https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3291/

/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
 */

const backspaceCompare = function(S, T) {
    const build = S => {
        const st = [];
        for (let i = 0, len = S.length; i < len; ++i) {
            if (S[i] == '#') {
                st.pop(); // if called on empty array, return undefined.
            } else {
                st.push(S[i]);
            }
        }
        return st.join('');
    };
    return build(S) === build(T);
};

backspaceCompare('ab#c', 'ab#c');
