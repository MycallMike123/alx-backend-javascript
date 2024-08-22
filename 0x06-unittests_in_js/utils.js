// utils.js

// Create and export the Utils module
const Utils = {
  // Calculate the sum of two rounded numbers
  calculateNumber: function(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      const roundedB = Math.round(b);
      if (roundedB === 0) {
        return 'Error';
      }
      return Math.round(a) / roundedB;
    }
    return null;
  }
};

module.exports = Utils;
