const assertEqual = function(actual, expected){
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


const eqObjects = function(object1, object2) {
  let keyset1 = Object.keys(object1);
  let keyset2 = Object.keys(object2);
  let result = true;

  if (keyset1.length !== keyset2.length){
    return false
  }
  
  keyset1.sort()
  keyset2.sort()


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
  

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false