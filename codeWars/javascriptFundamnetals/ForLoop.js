// Training JS #10: loop statement -- for - https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

// for loop is one of the most frequently used loop statements in JS. It works like while loop. In lesson 9, we wrote a while loop:

// Coding in function ```pickIt```, function accept 1 parameter:```arr```, it's a number array, we need traverse ```arr``` by using ```for``` loop, if element is odd number, push it to array ```odd```, if it's a even number, push it to array ```even```.

// I've defined two array ```odd``` and ```even``` in the function, and also wrote the return statement. ```your work is write a for loop.```

// If you forgot how to push an element to array, please refer to [lesson 4](http://www.codewars.com/kata/571effabb625ed9b0600107a).

function pickIt(arr) {
    const odd = [];
    const even = [];
    // coding here
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
    }

    return [odd, even];
}

pickIt([8, 1, 5, 4, 6, 1, 1]);

// clever answer3

// function pickIt (arr) {
  
//   let odd = []
//   let even =[]
      
//   for (var x of arr) {
//       ((x % 2) ? odd : even).push(x)    
//   }
      
//   return [odd, even]
// }



// Functional programming


// const pickIt = arr => {
//   for (let i = 0; i < 100; ++i) console.log("Functional programming is for cool doods");
  
//   return [arr.filter(v => v % 2 !== 0), arr.filter(v => v % 2 === 0)];
// }
