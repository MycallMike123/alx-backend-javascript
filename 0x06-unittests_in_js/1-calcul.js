/**
 * Function to perform arithmetic operations (SUM, SUBTRACT, DIVIDE) 
 * after rounding the inputs to the nearest integer.
 * 
 * @param {string} type - The operation to perform (SUM, SUBTRACT, DIVIDE).
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the operation or 'Error' if division by zero.
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (type === 'SUM') {
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    if (roundedB === 0) {
      return 'Error';
    }
    return roundedA / roundedB;
  } else {
    throw new Error('Invalid operation type');
  }
}

// Export the function for use in test cases
module.exports = calculateNumber;
