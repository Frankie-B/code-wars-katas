// function forEachCount(arr) {
//   arr.forEach((el, i) => {
//     console.log(el);
//   });
// }

// forEachCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

[
  { a: 1, b: 2, c: true, d: 'hi' },
  { a: 2, b: 2, c: true, d: true },
  { a: 3, b: 2, c: false, d: 3 },
].forEach((el) => {
  if ((el.c && el.d === typeof string) || el.d === typeof boolean) {
    console.log(el.a + el.b);
  }
}); // log the sum of each object is c is true and d is text / string OR a boolean, so: 3, 4
