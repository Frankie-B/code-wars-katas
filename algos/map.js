console.clear();

var a = [1, 2, 3].map((v) => v * 2);
console.log(a); // * 2 logs: [2, 4, 6]

var b = a.map((v) => v + 1);
console.log(b); // + 1, log 3, 5, 7

var d = ['1', '2', '3'];
var c = b.map((v, i) => v + parseInt(d[i]));

console.log(c); // + d[i] , logs: [4, 7, 10]

// console.clear();

var a = [1, 2, 3];

// map and log stuff urself :)
a.map((v) => v);

console.log(a);

// map to "times index", logs [0, 2, 6]
let e = a.map((v, i) => v * i);
console.log(e);

// map to index, yes, loose all the values and replace by the index. logs [0, 1, 2]

// map to "times index", logs [0, 2, 6]
// let f = e.map(function(v, i) {
//   return i
// })
// console.log(f);

let f = e.map((v, i) => i);
console.log(f);

// map to nested, logs [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
let x = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

x.map((v) => v);
console.log(x);

var a = [{ name: 'john' }, { name: 'frank' }, { name: 'ron' }];

// function addS(name) {
//   const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
//   return nameCapitalized + 's';
// }

// a.map((v, i) => v.value = addS(v.name));
// console.log(a);

// a.map(function(v) {
//   v.value = v.name.charAt(0).toUpperCase() + v.name.slice(1) + 's';
//   return v;
// });

a.map(
  (v) => (v.value = v.name.charAt(0).toUpperCase() + v.name.slice(1) + 's')
);

console.log(a);

// map to exactly this: [
//   { name: 'john', number: 1 },
//   { name: 'frank', number: 1 },
//   { name: 'ron', number: 1 }
// ]

// var a = [
//   { name: 'cats' },
//   { name: 'dogs' },
//   { name: 'tigers' },
// ];

// a.map(v => v.name);
// console.log(a);

// a.map((v) => v)

// console.log(a);

// map to [{ name: 'cats', value: 'Cat' } etc
// let y = a.map((v) => v.name.length);

// console.log(y);

// map to [{ name: {nameLength}, value: {valueLength} }, etc], logs [{ name: 4, value: 3 }, etc]

// let z = y.map( v => value.length);
// console.log(z);
// map to total characters in object, logs [7, 7, 11]

// combine the array's, log [ { numbersOfCats: 7, name: 'cats', value: '7 cats' }, etc]

// combine array to it: log [ {
//   combo: "there are only {arrayLength} objects in this array, i am the {i} and its about {value}"
//   name: 'cats'
// }]
