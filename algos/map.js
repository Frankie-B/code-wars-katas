console.clear();

var a = [1, 2, 3].map((v) => v * 2);
console.log(a); // * 2 logs: [2, 4, 6]

var b = a.map((v) => v + 1);
console.log(b); // + 1, log 3, 5, 7

var d = ['1', '2', '3'];
var c = b.map((v, i) => v + (i + d[i]));
console.log(c); // + d[i] , logs: [4, 7, 10]

// console.clear();

var a = [1, 2, 3];

// map and log stuff urself :)

// map to "times index", logs [0, 2, 6]

// map to index, yes, loose all the values and replace by the index. logs [0, 1, 2]

// map to nested, logs [[1, 2, 3], [1, 2, 3], [1, 2, 3]]

var a = [{ name: 'cats' }, { name: 'dogs' }, { name: 'tigers' }];

// map to [{ name: 'cats', value: 'Cat' } etc

// map to [{ name: {nameLength}, value: {valueLength} }, etc], logs [{ name: 4, value: 3 }, etc]

// map to total characters in object, logs [7, 7, 11]

// combine the array's, log [ { numbersOfCats: 7, name: 'cats', value: '7 cats' }, etc]

// combine array to it: log [ {
//   combo: "there are only {arrayLength} objects in this array, i am the {i} and its about {value}"
//   name: 'cats'
// }]
