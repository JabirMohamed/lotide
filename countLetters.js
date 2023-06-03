const assertEqual = function(actual, expected){
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

function countLetters(str) {
  let result = {};
  for (let letter of str) {
    if (letter !== " ") {
      result[letter] = count(str, letter);
    }
  }
  return result;
}

let count = function(str, letter) {
  let scores = 0;
  for (let char of str) {
    if (char === letter) {
      scores += 1;
    }
  }
  return scores;
}


let finalResult = countLetters("Jabir Mohamed is the Goat")

console.log(finalResult)

assertEqual(finalResult["J"], 1)
assertEqual(finalResult["a"], 3)