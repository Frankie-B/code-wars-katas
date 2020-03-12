// Here's your task: write a function greaterThanLessThan with three arguments (a,b,c) that returns a boolean (true or false), such that

/**
 * Note: arguments do not necessarily have to be in strict ascending or descending order, as indicated by the example test cases.

Check out the included test cases - not all arguments are going to return true! It's up to you to figure out which ones do and which ones don't.

Hint: This challenge is a LOT easier than it might seem at first. Don't focus too much on building functions - just pay attention to precedence.

Best of luck!
 */

function greaterThanLessThan(a, b, c) {
  return a < b < c;
}

greaterThanLessThan();

// Clever solution : const greaterThanLessThan = (a, b, c) => a < b < c;
