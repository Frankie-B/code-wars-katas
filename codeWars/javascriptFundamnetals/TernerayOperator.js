// Training JS #7: - https://www.codewars.com/kata/57202aefe8d6c514300001fd/javascript

// if..else and ternary operator

// In Javascript, if..else is the most basic condition statement, it consists of three parts:condition, statement1, statement2, like this:

// if (condition) statement a
// else           statement b
// It means that if the condition is true, then execute the statement a, otherwise execute the statement b.If the statement a or statement b more than one line, you need to add { and } at the head and tail of statement in JS, to keep the same indentation on Python and to put a end in Ruby where it indeed ends.

// An example, if we want to judge whether a number is odd or even, we can write code like this:

// function oddEven(n){
//   if (n%2==1) return "odd number";
//   else        return "even number";
// }
// If there is more than one condition to judge, we can use the compound if...else statement. an example:

// function oldYoung(age){
//   if (age<16)      return "children"
//   else if (age<50) return "young man"   //use "else if" if needed
//   else             return "old man"
// }
// This function returns a different value depending on the parameter age.

// Looks very complicated? Well, JS and Ruby also support the ternary operator and Python has something similar too:

// condition ? statement a : statement b
// Condition and statement separated by "?", different statement separated by ":" in both Ruby and JS; in Python you put the condition in the middle of two alternatives. The two examples above can be simplified with ternary operator:

// function oddEven(n){
//   return n%2==1 ? "odd number" : "even number";
// }
// function oldYoung(age){
//   return age<16 ? "children" : age<50 ? "young man" : "old man";
// }
// Task:
// Complete function saleHotdogs/SaleHotDogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// +---------------+-------------+
// |  numbers n    | price(cents)|
// +---------------+-------------+
// |n<5            |    100      |
// +---------------+-------------+
// |n>=5 and n<10  |     95      |
// +---------------+-------------+
// |n>=10          |     90      |
// +---------------+-------------+
// You can use if..else or ternary operator to complete it.

function saleHotdogs(n) {
  n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

// clever solution

// var saleHotdogs = (n) => (100 - ((n > 9) + (n > 4)) * 5) * n;
