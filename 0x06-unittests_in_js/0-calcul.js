// Function to round two numbers and return their sum
function calculateNumber(a, b) {
  // Round the inputs to the nearest integer and return the sum
  return Math.round(a) + Math.round(b);
}

// Export the function to be used in other files, such as test cases
module.exports = calculateNumber;
