// Import the expect function from Chai
const { expect } = require('chai');

// Import the calculateNumber function from the 2-calcul_chai.js file
const calculateNumber = require('./2-calcul_chai');

// Describe block to organize test cases for the SUM operation
describe('SUM', function() {
  it('should return 6 when inputs are 1.4 and 4.5', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
});

// Describe block to organize test cases for the SUBTRACT operation
describe('SUBTRACT', function() {
  it('should return -4 when inputs are 1.4 and 4.5', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
});

// Describe block to organize test cases for the DIVIDE operation
describe('DIVIDE', function() {
  it('should return 0.2 when inputs are 1.4 and 4.5', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" when dividing by 0', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
