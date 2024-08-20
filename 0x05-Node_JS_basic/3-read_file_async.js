const fs = require('fs');

/**
 * Asynchronously reads a CSV file and counts the number of students in each field
 * @param {string} path - The path to the CSV file
 * @returns {Promise<void>} - A promise that resolves when the operation is complete
 */

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        // Reject the promise with an error message if the file cannot be read
        reject(new Error('Cannot load the database'));
      } else {
        // Split the file content by new lines and filter out empty lines
        const lines = data.split('\n');

        // Filter out empty lines and get student data
        const students = lines.filter((line) => line.trim() !== '').slice(1);

        // Log the total number of students
        console.log(`Number of students: ${students.length}`);

        // Initialize a map to store the students by field
        const fieldCount = {};

        students.forEach((student) => {
          const [firstName, , , field] = student.split(',');

          if (field) {
            if (!fieldCount[field]) {
              fieldCount[field] = [];
            }
            fieldCount[field].push(firstName);
          }
        });

        // Log the total number of students
        for (const [field, names] of Object.entries(fieldCount)) {
          console.log(
            `Number of students in ${field}: ${
              names.length
            }. List: ${names.join(', ')}`,
          );
        }
        // Resolve the promise when done
        resolve();
      }
    });
  });
}

module.exports = countStudents;
