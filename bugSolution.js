function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, "3")); // Throws an error