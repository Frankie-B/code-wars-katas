// Divides Evenly - https://edabit.com/challenge/JfB9mWmbwYHbupxCB

/**
 * Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
 */

function dividesEvenly(a, b) {
  return a % b === 0 ? true : false;
}

dividesEvenly(10, 5);
