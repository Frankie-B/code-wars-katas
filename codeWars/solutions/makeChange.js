// Grasshopper - Make change (8Kyu) : https://www.codewars.com/kata/560dab9f8b50f89fd6000070

/**
 *Get change
You go to the store and have a 10 dollar bill to spend. You buy candy, chips, and soda. Find out how much change you get back from the cashier.

Item	Cost
Candy	$1.42
Chips	$2.40
Soda	$1.00
Create 5 variables and use the cost from the table above to set their values.
 */
const money = 10;
const candy = 1.42;
const chips = 2.4;
const soda = 1.0;

const change = money - candy - chips - soda;
