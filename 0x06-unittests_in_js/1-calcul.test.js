// Import the assert module for writing test assertions
const assert = require('assert');

// Import the calculateNumber function from the 1-calcul.js file
const calculateNumber = require('./1-calcul');

// Describe block to organize test cases for the SUM operation
describe('SUM', function() {
  it('should return 6 when inputs are 1.4 and 4.5', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
});

// Describe block to organize test cases for the SUBTRACT operation
describe('SUBTRACT', function() {
  it('should return -4 when inputs are 1.4 and 4.5', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
});

// Describe block to organize test cases for the DIVIDE operation
describe('DIVIDE', function() {
  it('should return 0.2 when inputs are 1.4 and 4.5', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" when dividing by 0', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
