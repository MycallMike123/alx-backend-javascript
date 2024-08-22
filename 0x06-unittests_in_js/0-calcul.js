// create file named 0-calcul.js that contains a function

/**
 * Performs an operation based on the type provided on the rounded values of a and b
 * @param {string} type - The type of operation: 'SUM', 'SUBTRACT', or 'DIVIDE'
 * @param {number} a - The first number
 * @param {number} b - The second num
 */

function calculateNumber(type, a, b) {
  // we round the numbers
  const aApprox = Math.round(a);
  const bApprox = Math.round(b);

  // perform operation based on type
  if (type === 'SUM') {
    // return sum of rounded numbers
    return aApprox + bApprox;
  } else if (type === 'SUBTRACT') {
    // return difference of rounded numbers
    return aApprox - bApprox;
  } else if (type === 'DIVIDE') {
    // check if b is 0
    if (bApprox === 0) {
      // return 'Error' if b is 0
      return 'Error';
    }
    // return division of rounded numbers
    return aApprox / bApprox;
  } else {
    // return 'Error' for invalid operations
    return 'Error';
  }
}

module.exports = calculateNumber;
