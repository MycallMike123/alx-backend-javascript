// Import the assert module for writing test assertions
const assert = require('assert');

// Import the calculateNumber function from the 0-calcul.js file
const calculateNumber = require('./0-calcul');

// Describe block defines a test suite for the calculateNumber function
describe('calculateNumber', function() {

  // Test case 1: Check if the function returns 4 when inputs are 1 and 3
  it('should return 4 when inputs are 1 and 3', function() {
    // Assert that the returned value is strictly equal to 4
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  // Test case 2: Check if the function returns 5 when inputs are 1 and 3.7
  it('should return 5 when inputs are 1 and 3.7', function() {
    // Assert that the returned value is strictly equal to 5
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  // Test case 3: Check if the function returns 5 when inputs are 1.2 and 3.7
  it('should return 5 when inputs are 1.2 and 3.7', function() {
    // Assert that the returned value is strictly equal to 5
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  // Test case 4: Check if the function returns 6 when inputs are 1.5 and 3.7
  it('should return 6 when inputs are 1.5 and 3.7', function() {
    // Assert that the returned value is strictly equal to 6
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Test case 5: Check if the function returns 0 when inputs are 0.1 and -0.1
  it('should return 0 when inputs are 0.1 and -0.1', function() {
    // Assert that the returned value is strictly equal to 0
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });

  // Test case 6: Check if the function returns -2 when inputs are -1.2 and -1.2
  it('should return -2 when inputs are -1.2 and -1.2', function() {
    // Assert that the returned value is strictly equal to  -2
    assert.strictEqual(calculateNumber(-1.2, -1.2), -2);
  });
});
