const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

function eqArrays(actual, expected) {
  if(actual.length !== expected.length) {
    return false;
  }

  //Iterate over eatch item in both arrays and compare them
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  //Array is the same length and all elements are equal
  return true;
}

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("The assertion passed")
  } if (eqArrays(array1, array2) !== true) {
    console.log("The assertion failed")
  }
}

const results1 = map(words, word => word[0]);
console.log(results1);