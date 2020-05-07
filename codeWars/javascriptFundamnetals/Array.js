// Training JS #4: - https://www.codewars.com/kata/571effabb625ed9b0600107a/javascript

// Basic data types--Array

// In javascript, Array is one of basic data types. Define an empty array can use var arr=new Array() or var arr=[]

// Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

// Each element in the array has an index, use arr[index] to get the value of element.

// index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

// If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

// var arr=[1,2,3];     //define an array arr contains elements 1 2 3
// arr.push(4);         //add element 4 to arr
// console.log(arr)     //[1,2,3,4]
// arr.pop();           //remove the last element from arr
// console.log(arr)     //[1,2,3]
// #Task
// I've written five function, each function receives a parameter: arr(an array), you should coding something with arr.
//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr

const getLength = (arr) => arr.length;

const getFirst = (arr) => arr[0];

const getLast = (arr) => arr[arr.length - 1];

const pushElement = (arr) => {
  let el = 1;
  arr.push(el);
  return arr;
};

const popElement = (arr) => {
  arr.pop();
  return arr;
};

// clever solution

// const getLength = (array) => array.length;

// const getFirst = (array) => array[0];

// const getLast = (array) => array[array.length - 1];

// const pushElement = (array) => array.concat(0);

// const popElement = (array) => array.splice(0, array.length - 1);

// clever solution 2

// let getLength = (a) => a.length,
//   getFirst = (a) => a[0],
//   getLast = (a) => a[a.length - 1],
//   pushElement = (a) => a.concat([1]),
//   popElement = (a) => {
//     a.pop();
//     return a;
//   };
