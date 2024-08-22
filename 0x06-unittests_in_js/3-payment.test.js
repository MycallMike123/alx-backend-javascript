// 3-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

// Test suite for sendPaymentRequestToApi function
describe('sendPaymentRequestToApi', function() {
  let calculateNumberSpy;

  // Before each test, set up the spy
  beforeEach(function() {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  // After each test, restore the spy to avoid side effects
  afterEach(function() {
    calculateNumberSpy.restore();
  });

  // Test case to validate usage of Utils.calculateNumber
  it('should call Utils.calculateNumber with SUM, 100, and 20', function() {
    sendPaymentRequestToApi(100, 20);

    // Verify that calculateNumber was called with the correct arguments
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Verify that calculateNumber was called once
    expect(calculateNumberSpy.calledOnce).to.be.true;
  });
});
