// Group Anagrams - https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3288/

/**
 * Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  for (let str of strs) {
    const key = [...str].sort().join('');

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }

  return Object.values(map);
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
