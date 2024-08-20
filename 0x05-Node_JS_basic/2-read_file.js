const fs = require('fs');

/**
 * Reads a CSV file and counts the number of students in each field
 * @param {string} path - Path to the CSV file
 */

function countStudents(path) {
  try {
    // read file content asynchronously
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n'); // split data into lines

    // filter out empty lines and get student data
    const students = lines.filter((line) => line.trim() !== '').slice(1);
    // Log the total number of students
    console.log(`Number of students: ${students.length}`);

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

    // Log the number of students in each field and their names
    for (const [field, names] of Object.entries(fieldCount)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      );
    }
  } catch (error) {
    // Handle errors, such as file not found
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
