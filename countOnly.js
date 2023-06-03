const assertEqual = function(actual, expected){
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  let count = 0;
  for (const key in itemsToCount) {
    if (itemsToCount[key]) {
      count = countKey(key, allItems);
      if (count !== 0){
        results[key] = count
      }
    } 
  } return results
}

const countKey = function(key, array) {
  let count = 0
  for (let item of array) {
    if (item === key){
      count++
    } 
  } return count
}

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1)

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);