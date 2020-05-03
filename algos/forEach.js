console.clear();
[1, 2, 3].forEach((a) => {
  console.log(a);
}); // log 1, 2, 3 on different lines

[{ a: 1 }, { a: 2 }, { a: 3 }].forEach((el) => {
  console.log(el.a);
}); // log 1, 2, 3 on different lines

[
  { a: 1, b: 2 },
  { a: 2, b: 2 },
  { a: 3, b: 2 },
].forEach((el) => {
  console.log(el.a + el.b);
}); // log the sum of each object, so, 3, 4, 5

// [
//   { a: 1, b: 2 },
//   { a: 2, b: 2 },
//   { a: 3, b: 2 },
// ].forEach(); // log the sum of each object, so, 3, 4, 5

[
  { a: 1, b: 2, c: true },
  { a: 2, b: 2, c: true },
  { a: 3, b: 2, c: false },
].forEach((el) => {
  // console.log(el.c ? el.a + el.b : "False")
  if (el.c) console.log(el.a + el.b);
}); // log the sum of each object where c is true, so: 3, 4

[
  { a: 1, b: 2, c: true },
  { a: 2, b: 2, c: true },
  { a: 3, b: 2, c: false },
].forEach((el) => {
  if (el.c && el.a + el.b > 3) console.log(el.a + el.b);
}); // log the sum of each object where c is true AND the sum is higher than 3, so, only log 4

var a = 'hi';

// log if a is a string: true
if (typeof a === 'string') {
  console.log(true);
}

// log if a is a boolean: false
if (typeof a === 'boolean') {
  console.log(false);
}

var b = {
  yyy: 3,
};

// log if b.yyy is a string: false
if (typeof b === 'string') {
  console.log(false);
}

var c = [
  true,
  'asdfsadsdafsad',
  3333,
  [1, 2, 3],
  {
    text: 'asfasdfasdfs',
    otherText: 'asdfasdfsdfsa',
    num: 3,
  },
]; // log all types

c.forEach((el) => {
  console.log(typeof el);
  console.log(typeof el === 'string' ? true : false);
});

// log for each value if its a string: false, true, false, false, false

[
  { a: 1, b: 2, c: true, d: 'hi' },
  { a: 2, b: 2, c: true, d: true },
  { a: 3, b: 2, c: false, d: 3 },
].forEach((el) => {
  if (el.c && (typeof el.d === 'string' || typeof el.d === 'boolean')) {
    console.log(el.a + el.b);
  }
}); // log the sum of each object is c is true and d is text / string OR a boolean, so: 3, 4

// ******* ********* More algos ********************
console.clear();
['hi', 'bye', 'like'].forEach((el) => {
  console.log(`${el} ron`);
}); // log 'hi ron', 'bye ron', 'like ron';

[{ text: 'hi' }, { text: 'bye' }, { text: 'like' }].forEach((el) => {
  console.log(`${el.text} ron`);
}); // log the same stuff as above

[{ text: 'hi' }, { text: 'bye' }, { text: 'like' }].forEach((el) => {
  console.log(`${el.text} ron`);
}); // log the same stuff as above

[true, true, true].forEach((el) => {
  if (el) {
    console.log("I'm awesome!");
  }
}); // log 3 times: "im awesome!" dont waste more time on this one than 1 minute

[true, false, true].forEach((el) => {
  if (el) {
    console.log("I'm awesome!!!");
  }
}); // log "im awesome" on true, so, 2 times

['hi', 'bye', true, 3].forEach((el) => {
  if (el === true || typeof el === 'number') {
    console.log("I'm awesome");
  }
}); //write ur own .forEach() from now on :P , and log "im awesome" when true or number

let e = [{ a: [1, 2] }, { a: [1, 3] }, { a: [1, 4] }];

e.forEach((el) => {
  let sum = el.a[0] + el.a[1];

  if (sum > 3) {
    console.log(sum);
  }
});
// if the sum in array a is bigger than 3, log the sum, so: 4, 5

var age = 0;
[1, 2, 3].forEach((el) => {
  age += el;
}); // add them to age in a forEach
console.log(age);

[
  {
    cars: {
      total: 6,
      broken: 1,
    },
  },
  {
    cars: {
      total: 6,
      broken: 2,
    },
  },
  {
    cars: {
      total: 6,
      broken: 3,
    },
  },
].forEach((el) => {
  let percentage = Math.floor((el.cars.broken / el.cars.total) * 100);
  let goodCars = el.cars.total - el.cars.broken;
  let brokeCars = el.cars.broken;
  console.log(`${percentage}%`, goodCars);
  console.log(`This dude has ${brokeCars} broken cars`);
}); // log the number of broken cars: 1, 2, 3

// next, log the percentage of broken cars, uuuh, idk :P 16%, 33%, 50%, something like that

// next, log good cars: 5, 4, 3

// next, log "this dude has 1 broken cars", "this dude has 2 broken cars", "this dude has 3 broken cars"

let autos = [
  {
    cars: {
      salesman: 'john',
      broken: {
        reason: {
          unknown: 3,
          engine: 5,
          parkingspot: ['b1', 'x6', 'z23'],
        },
      },
    },
  },
  {
    cars: {
      salesman: 'doe',
      broken: {
        reason: {
          unknown: 4,
          engine: 6,
          parkingspot: ['b1', 'x6', 'z23'],
        },
      },
    },
  },
];

autos.forEach((el) => {
  let unknown = el.cars.broken.reason.unknown;
  let engineProb = el.cars.broken.reason.engine;
  let totalBrokenCars = [unknown + engineProb];
  let spots = el.cars.broken.reason.parkingspot;
  console.log(totalBrokenCars);

  spots.forEach((el) => {
    console.log(el);
  });
});

// log num of unknown broken reasons: 3, 4

// log number of total broken cars: 8, 10

// log ALL parking spots seperately, you may wanna use a nested forEach here

// make it better, log "there is a car on spot {spot}"

// create a variable, "total", and log it with total number of broken cars. use forEach to add numbers to it
let total = 0;
autos.forEach((auto) => {
  const { unknown, engine } = auto.cars.broken.reason;
  total += unknown + engine;
});
console.log(total);

let totalParkingSpots = 0;
autos.forEach((el) => {
  const { parkingspot } = el.cars.broken.reason;

  totalParkingSpots += parkingspot.length;
});
console.log(totalParkingSpots);

// log the number of engine troubles where the salesman name is 'john': 5
let engineProb = 0;
autos.forEach((el) => {
  const { salesman } = el.cars;
  const { engine } = el.cars.broken.reason;
  if (salesman !== 'doe') {
    engineProb += engine;
  }
});
console.log(engineProb);

// log the number of total troubles where the salesman name is 'doe': 10
let totalProblems = 0;
autos.forEach((el) => {
  const { salesman } = el.cars;
  const { unknown, engine } = el.cars.broken.reason;
  if (salesman !== 'john') {
    totalProblems += engine + unknown;
  }
});
console.log(totalProblems);
