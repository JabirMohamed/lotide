// Function to put together the letter and where they occur in the sentences into the final object to be presented

const letterPositions = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      results[letter] = finder(sentence, letter);
    }
  }
  return results;
};

// ----------------------------------------------------------------------

//Function ment to find how often and where the letter occurs then put it in array for the LetterPositions function to use
const finder = function (sentence, letter){
  let found = []
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === letter){
      found.push(i)
    }
  }
  return found

}


// ----------------------------------------------------------------------

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

// ----------------------------------------------------------------------

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("The assertion passed")
  } if (eqArrays(array1, array2) !== true) {
    console.log("The assertion failed")
  }
}

// Calling the function and testing it out

console.log(letterPositions("Jabir Mohamed is the greatest student to come out of Lighhouse Labs"));

