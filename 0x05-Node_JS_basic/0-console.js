#!/usr/bin/env node

/**
 * Prints the given message to the standard output (STDOUT).
 * @param {string} message - The message to be printed.
 */
function displayMessage(str) {
  console.log(str);
}

// Export the displayMessage function to be used in other modules
module.exports = displayMessage;
