const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  // Runs before each test in this block
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  // Runs after each test in this block
  afterEach(() => {
    consoleSpy.restore();  // Restores the original console.log function
  });

  it('should log "The total is: 120" when inputs are 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify the log output
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    // Verify the log was only called once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" when inputs are 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Verify the log output
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

    // Verify the log was only called once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
