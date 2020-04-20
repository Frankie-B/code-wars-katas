// 1) Write a program that filters a array of strings and returns a array with only your friends name in it.
// - However only if the name of a friend has exactly 4 letters in it
// Like this:
// Input = [“Jack”, “Hansen”, “Peter”, “Kido”, “Angela”, “Gijs”];
// Output = [“Jack”, “Kido”, “Gijs”]

// the filter method ti takes an array and for every element it goes over it and imposes a condition if el length is 4 it returns the element

function friend(input) {
  return input.filter((n) => n.length === 0);
}

// 2) Write a function that takes in a string of one or more words and returns the same string, but with the words that have at least five letter in reverse.
// - Strings passed in will consist of only letters and spaces.
// - Spaces will be included only when more than one word is present in the string.
// ex: Input = spinWords(“Today is a beautiful day to be alive”) -->
// Output: “yadoT is a lufituaeb day to be evila”'

// function reverseString(string) {
//   let arr = string.split(' ');
//   let arr2 = arr.map((el) => {
//     if (el.length > 4) {
//       return el.split('').reverse().join('');
//     } else return el;
//   });
//   return arr2.join(' ');
// }

function spinWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => (word.length > 4 ? word.split('').reverse().join('') : word))
    .join('');
}

console.log(reverseString('Today is a beautiful day'));
// 3) There is an array with some numbers. All numbers are equal except for one. Make a function that can find that unique number.
// ex array = [3,3,3,3,5,3,3,3] -> output: 5
// do this for array = [6,3,3,6,6, 0.88, 6,6,3,6]
/*

4) The mexican wave is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position. (see: https://en.wikipedia.org/wiki/Wave_(audience)
>>>>- Create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
RULES:
1. The input string will always be lowercase but may be empty.
2. If the character in the string is whitespace then pass over it as if it was an empty seat.
EXAMPLE: myMexicanWave(“papua new guinea”) SHOULD RETURN >>>>
[ ‘Papua new guinea’,
 ‘pApua new guinea’,
 ‘paPua new guinea’,
 ‘papUa new guinea’,
 ‘papuA new guinea’,
 ‘papua New guinea’,
 ‘papua nEw guinea’,
 ‘papua neW guinea’,
 ‘papua new Guinea’,
 ‘papua new gUinea’,
 ‘papua new guInea’,
 ‘papua new guiNea’,
 ‘papua new guinEa’,
 ‘papua new guineA’ ]
*/

// 5) Make a function that moves the first letter of each word to the end of it, then add ‘ay’ to the end of the word.
// - Ex: Input = pickIt(‘Pig latin is cool’); Output = igPay atinlay siay oolcay
