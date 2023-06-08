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

const assertArraysEqual = require(`./assertArraysEqual`)

// function assertArraysEqual(array1, array2) {
//   if (eqArrays(array1, array2) === true) {
//     console.log("The assertion passed")
//   } if (eqArrays(array1, array2) !== true) {
//     console.log("The assertion failed")
//   }
// }


let middle = function(array){
  let final = []
  if (array.length === 1 || array.length === 2){
    return final
  }
  if (array.length % 2 !== 0){
    let middleIndex = Math.floor(array.length / 2)
    let middleElement = array[middleIndex]
    return middleElement
  }
  if (array.length % 2 === 0){
    let middleIndex1 = (array.length / 2) - 1;
    let middleIndex2 = (array.length / 2);
    let middleElement1 = array[middleIndex1]
    let middleElement2 = array[middleIndex2]
    final.push(middleElement1)
    final.push(middleElement2)
  } return final
}

module.exports = middle