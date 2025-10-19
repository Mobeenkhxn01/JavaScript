console.loq("2"=="2"); // true
console.log(2=="2"); // true
console.log(2==="2"); // false
// == operator performs type coercion means that if types are different then it converts one type to another type and then compares.
// === operator does not perform type coercion
console.log(0==false); // true
console.log(0===false); // false

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// Explanation:
// null is considered as 0 only in >= or <= comparisons.
// In > or < comparisons null is considered less than any number including 0.
// In == comparison null is equal to undefined only.

