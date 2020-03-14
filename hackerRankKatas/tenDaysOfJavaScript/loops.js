// 2 . Loops - https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

/**
 * Objective

In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

Task

Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
 */

'use strict';
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let str = s.split('');
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      console.log(str[i]);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      console.log(str[i]);
    }
  }
}

vowelsAndConsonants('javascript');
