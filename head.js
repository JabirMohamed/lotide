function head(array){
  return array[0]
};



const assertEqual = function(head, expected){
  if (head === expected) {
    console.log(`✅✅✅ Assertion Passed: ${head} ===  ${expected}`);
  } if (head !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${head} !== ${expected}`);
  }
};


assertEqual(head([5,6,7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");