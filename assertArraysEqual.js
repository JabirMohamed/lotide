const eqArrays = require(`./eqArrays`)

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("The assertion passed")
  } if (eqArrays(array1, array2) !== true) {
    console.log("The assertion failed")
  }
}

module.exports = assertArraysEqual


// function eqArrays(actual, expected) {
//   if(actual.length !== expected.length) {
//     return false;
//   }

//   //Iterate over eatch item in both arrays and compare them
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       return false;
//     }
//   }

//   //Array is the same length and all elements are equal
//   return true;
// }

// const assertEqual = function(actual, expected){
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
//   } if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
//   }
// };