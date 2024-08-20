const http = require('http');
const url = require('url');
const fs = require('fs');

// Asynchronously reads a CSV file and counts students by field
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        // Reject the promise if the file can't be read
        reject(new Error('Cannot load the database'));
      } else {
        // Split the CSV content into lines
        const lines = data.split('\n');

        // Remove empty lines and get student entries
        const students = lines.filter((line) => line.trim() !== '').slice(1);

        // Create an object to tally students by their field of study
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

        // Generate the output string
        let output = `Number of students: ${students.length}\n`;

        for (const [field, names] of Object.entries(fieldCount)) {
          output += `Number of students in ${field}: ${
            names.length
          }. List: ${names.join(', ')}\n`;
        }


