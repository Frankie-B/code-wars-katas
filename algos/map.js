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
let f = e.map((v, i) => i);
console.log(f);

console.clear();
// map to nested, logs [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
let x = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

x.map((v) => v);
console.log(x);

var a2 = [{ name: 'john' }, { name: 'frank' }, { name: 'ron' }];

// map to exactly this: [
//   { name: 'john', number: 1 },
//   { name: 'frank', number: 1 },
//   { name: 'ron', number: 1 }
// ]
a2.map(function (v) {
  return {
    name: a2.name,
    number: (v.number = 1),
  };
});

console.log(a2);

const b2 = a2.map(function (v) {
  return {
    name: v.name,
    value: v.name.charAt(0).toUpperCase() + v.name.slice(1) + 's',
  };
});

console.log(b2);

const b3 = ['frank', 'ron'].map((v) => `hi ${v}`);

console.log(b3);

// map it to 'hi frank' and 'hi ron'

const b4 = [{ name: 'frank' }].map(function (v) {
  return {
    name: `hi ${v.name}`,
  };
});

console.log(b4);

var a3 = [{ name: 'cats' }, { name: 'dogs' }, { name: 'tigers' }];

// a3.map(v => v.name);
// console.log(a3);

a3.map((v) => v);

console.log(a3);

// map to [{ name: 'cats', value: 'Cat' } etc
let animals = a3.map(function (v) {
  return {
    name: v.name,
    value: v.name.charAt(0).toUpperCase() + v.name.slice(1),
  };
});

console.log(animals);

// map to [{ name: {nameLength}, value: {valueLength} }, etc], logs [{ name: 4, value: 3 }, etc]
let strLength = animals.map(function (v) {
  return {
    name: v.name.length,
    value: v.value.length,
  };
});
console.log(strLength);

// map to total characters in object, logs [7, 7, 11]
let totalLength = animals.map(function (v) {
  return v.name.length + v.value.length;
});
console.log(totalLength);

// combine the array's, log [ { numbersOfCats: 7, name: 'cats', value: '7 cats' }, etc]

let combineArr = animals.map(function (v) {
  let numName = v.name.length;
  let numValue = v.value.length;
  return {
    numbersOfCats: numName,
    name: v.name,
    value: `${numValue} ${v.value}`,
  };
});

console.log(combineArr);

// combine array to it: log [ {
//   combo: "there are only {arrayLength} objects in this array, i am the {i} and its about {value}"
//   name: 'cats'
// }]
let complexAnimalMap = animals.map(function (v, i) {
  return `${animals.length} objects in this array , i am ${i} and its about ${v.value}`;
});

console.log(complexAnimalMap);

const lastB = [
  {
    a: [1],
  },
].map((v) => v.a);
console.log(lastB);

const finalB = [
  {
    a: [1],
  },
].map((v) => {
  return {
    a: v.a.map((v) => {
      return v * 2;
    }),
  };
});

console.log(finalB);
