// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null

// Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#).
// function calculate(num1, operation, num2) {
//   //TODO: make a basic calculator.
//   if (operation === '+') {
//     return num1 + num2;
//   } else if (operation === '-') {
//     return num1 - num2;
//   } else if (operation === '/' && num2 !== 0) {
//     return num1 / num2;
//   } else if (operation === '*') {
//     return num1 * num2;
//   } else {
//     return null;
//   }
// }

//Challenge: https://www.codewars.com/kata/564e7fc20f0b53eb02000106

// cuont the number of consonants in a string

// function consonantCount(str) {
//   return str.replace(/[aeiouAEIOU ^$&#0-9_]/g, '').length;
// }

// A square of squares

// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task

// Given an integral number, determine if it's a square number:

//     In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples

// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true
// isSquare(26) returns  false

// Write the definition of the function "say" such that calling this:

// say("Hello")("World")

// Alternate Square Sum

// Write a method alternate_sq_sum() (JS: alternateSqSum ) that takes an array of integers as input and finds the sum of squares of the elements at even positions (i.e., 2nd, 4th, etc.) plus the sum of the rest of the elements at odd position.
// NOTE:

// The values at even *position* need to be squared. For a language with zero-based indices, this will occur at oddly-indexed locations. For instance, in Python, the values at indices 1, 3, 5, *etc.* should be squared because these are the second, fourth, and sixth positions in the list.
// For Example:

// alternateSqSum([11, 12, 13, 14, 15]) // should return 379

// Explanation:

// Elements at indices 0, 2, 4 are 11, 13, 15 and they are at odd positions as 11 is at position #1, 13 is at position #3 and 15 at #5.

// Elements at indices 1, 3 are 12 and 14 and they are at even position. So we need to add 11, 13, 15 as they are and square of 12 and 14

// --> 11 + 13 + 15 + 12^2 + 14^2
// = 11 + 13 + 15 + 144 + 196
// = 379

// For empty arrays, result should be 0 (zero) (except for Haskell).

// function alternateSqSum(arr) {
//   // happy coding :D
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//       total += arr[i] * arr[i];
//     } else {
//       total += arr[i];
//     }
//   }

//   return total;
// }
