// Less Than 100?  - https://edabit.com/challenge/9MjEpkL7yAjAqiH58

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples

// lessThan100(22, 15) ➞ true
//  22 + 15 = 37

// lessThan100(83, 34) ➞ false
//  83 + 34 = 117

function lessThan100(a, b) {
  let sum = a + b;
  return sum >= 100 ? false : true;
}

// const lessThan100 = (a, b) => (a + b) < 100
