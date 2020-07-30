/**
 * Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds(values) {
    // Return all non-odd values
    const evenValues = [];
    values.forEach(value => {
        if (value % 2 === 0) {
            evenValues.push(value);
        }
    });
    return evenValues;
}

// clever solution // var noOdds = values => values.filter(x => x % 2 === 0);
// const noOdds=vs=>vs.filter(v=>~-(v&1));
