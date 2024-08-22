// 4-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

// Test suite for sendPaymentRequestToApi function
describe('sendPaymentRequestToApi', function() {
  let calculateNumberStub;
  let consoleLogSpy;

  // Before each test, set up the stub and spy
  beforeEach(function() {
    // Stub the calculateNumber method to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // After each test, restore the stub and spy to avoid side effects
  afterEach(function() {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  // Test case to verify that the stub is being called with the correct arguments
  it('should call Utils.calculateNumber with SUM, 100, and 20', function() {
    sendPaymentRequestToApi(100, 20);

    // Verify that calculateNumber was called with the correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify that calculateNumber was called once
    expect(calculateNumberStub.calledOnce).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    // Verify that console.log was called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
