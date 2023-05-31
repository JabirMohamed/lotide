function tail(array){ 
  let tail = array.slice(1)
  return tail
};




const assertEqual = function(actual, expected){
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


// Test case #2: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// Test case #3: An array with only 1 item or an empty array should yeild an empty array for it's tail
const oneArray = tail(["Banana"])
const emptyArray = tail([])
assertEqual(oneArray.length, 0); // ensure we get back no elements in the array
assertEqual(oneArray[0], ""); // ensuring the first element in index is an empty string
assertEqual(emptyArray.length, 0) // ensure we get back no elements in the array
assertEqual(emptyArray[0], ""); // ensuring the first element in index is an empty string