console.clear();

var a = [1, 2, 3].map(v => v * 2);
console.log(a); // * 2 logs: [2, 4, 6]

const b = a.map(v => v + 1);

console.log(b); // + 1, log 3, 5, 7

const d = ['1', '2', '3'];
const c = b.map((v, i) => v + parseInt(d[i]));

console.log(c); // + d[i] , logs: [4, 7, 10]

// console.clear();

var a = [1, 2, 3];

// map and log stuff urself :)
a.map(v => v);

console.log(a);

// map to "times index", logs [0, 2, 6]
const e = a.map((v, i) => v * i);

console.log(e);

// map to index, yes, loose all the values and replace by the index. logs [0, 1, 2]

// map to "times index", logs [0, 2, 6]
const f = e.map((v, i) => i);

console.log(f);

console.clear();
// map to nested, logs [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
const x = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];

x.map(v => v);

console.log(x);

const a2 = [{ name: 'john' }, { name: 'frank' }, { name: 'ron' }];

// map to exactly this: [
//   { name: 'john', number: 1 },
//   { name: 'frank', number: 1 },
//   { name: 'ron', number: 1 }
// ]
const nameAndNumber = a2.map(function(v) {
    return {
        name: v.name,
        number: 1,
    };
});

console.log(nameAndNumber);

const b2 = a2.map(function(v) {
    return {
        name: v.name,
        value: `${v.name.charAt(0).toUpperCase() + v.name.slice(1)}s`,
    };
});

console.log(b2);

const b3 = ['frank', 'ron'].map(v => `hi ${v}`);

console.log(b3);

// map it to 'hi frank' and 'hi ron'

const b4 = [{ name: 'frank' }].map(function(v) {
    return {
        name: `hi ${v.name}`,
    };
});

console.log(b4);

const a3 = [{ name: 'cats' }, { name: 'dogs' }, { name: 'tigers' }];

// a3.map(v => v.name);
// console.log(a3);

a3.map(v => v);

console.log(a3);

// map to [{ name: 'cats', value: 'Cat' } etc
const animals = a3.map(function(v) {
    return {
        name: v.name,
        value: v.name.charAt(0).toUpperCase() + v.name.slice(1),
    };
});

console.log(animals);

// map to [{ name: {nameLength}, value: {valueLength} }, etc], logs [{ name: 4, value: 3 }, etc]
const strLength = animals.map(function(v) {
    return {
        name: v.name.length,
        value: v.value.length,
    };
});
console.log(strLength);

// map to total characters in object, logs [7, 7, 11]
const totalLength = animals.map(function(v) {
    return v.name.length + v.value.length;
});
console.log(totalLength);

// combine the array's, log [ { numbersOfCats: 7, name: 'cats', value: '7 cats' }, etc]

const combineArr = animals.map(function(v) {
    const numName = v.name.length;
    const numValue = v.value.length;
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
const complexAnimalMap = animals.map(function(v, i) {
    return `${animals.length} objects in this array , i am ${i + 1} and its about ${v.value}`;
});

console.log(complexAnimalMap);

const lastB = [
    {
        a: [1],
    },
].map(function(v) {
    return {
        a: v.a,
    };
});

console.log(lastB);

const finalB = [
    {
        a: [1],
    },
].map(v => ({
    a: v.a.map(v => v * 2),
}));

console.log(finalB);

console.clear();

const strArr = ['hi', 'bye', 'whyyy??'];

// map to string.length [2, 3, 7]

const mapStrArr = strArr.map(function(v) {
    return v.length;
});

console.log(mapStrArr);
// map to square, [4, 9, 49]

const squaredArr = [4, 9, 49].map(function(v) {
    return v * v;
});

console.log(squaredArr);

// map to, if bigger than 6, + 1 result [6, 8, 9]
const numArrObj = [{ size: 6 }, { size: 7 }, { size: 8 }];

const addNumArrObj = numArrObj.map(function(v) {
    if (v.size > 6) {
        v.size += 1;
    }
    return v;
});

console.log(addNumArrObj);

// map all true values to be false
const nestedArrObj = [
    {
        size: {
            number: {
                why: [1, true],
            },
        },
    },
];

const trueToFalse = nestedArrObj.map(function(v) {
    return v.size.number.why.map(function(v) {
        return typeof v === 'boolean' ? false : v;
    });
});

console.log(trueToFalse);

console.clear();
const cars = [
    { brand: 'volvo', amount: 50 },
    { brand: 'ford', amount: 200 },
    { brand: 'ferrari', amount: 1 },
];
const productions = [
    { brand: 'volvo', location: 'stockholm' },
    { brand: 'ferrari', location: 'rome' },
    { brand: 'ford', location: 'detroit' },
];
const drivers = [
    { brand: 'volvo', work: 'doctor' },
    { brand: 'ford', work: 'machine operator' },
    { brand: 'ferrari', work: 'hotshot' },
];

// log the amount of hotshots-cars => 1

// log the the city where the car of the doctor was build => stockholm

// this one is tuff: write a function, that takes in drivers, and returns a combined array like this:
// [
//   { brand: 'volvo', work: 'doctor', location: 'stockholm', amount: 50 },
//   etc
// ]
