const eqObjects = function(object1, object2) {
  let keyset1 = Object.keys(object1);
  let keyset2 = Object.keys(object2);
  let result = true;

  if (keyset1.length !== keyset2.length){
    return false
  }
  
  // keyset1.sort()
  // keyset2.sort()


  for (let i = 0; i < keyset1.length; i++){
    if (keyset1[i] !== keyset2[i]){
      return false
    }
    // if (object1[keyset1[i]] !== object2[keyset2[i]]){
    //   return false
    // }
  } 


  return result;
}

// const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`)
  }
}


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

assertObjectsEqual(shirtObject, anotherShirtObject);