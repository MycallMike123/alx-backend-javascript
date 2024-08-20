const express = require('express');
const fs = require('fs');
// const path = require('path');

// Function to count students from a CSV file asynchronously
function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (error, data) => {
      if (error) {
	// Reject the promise if there's an error reading the file
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
	// Remove header and empty lines
        const students = lines.filter((line) => line.trim() !== '').slice(1);

	// Get total number of students
        const totalStudents = students.length;

	// Object to store the count of students per field
        const fieldCount = {};
        students.forEach((student) => {
	  // Destructure the student data
          const [firstName, , , field] = student.split(',');
          if (field) {
            if (!fieldCount[field]) {
              fieldCount[field] = [];
            }
	    // Add the student to the corresponding field
            fieldCount[field].push(firstName);
          }
        });
	// Initialize the result string
        let result = `Number of students: ${totalStudents}\n`;
        for (const [field, names] of Object.entries(fieldCount)) {
	  // Add the field count and list of students to the result string
          result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
	// Resolve the promise with the final result
        resolve(result.trim());
      }
    });
  });
}

// Create an instance of the Express application
const app = express();

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the '/students' URL
app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.status(500).send('Database path not provided');
    return;
  }

  res.write('This is the list of our students\n');
  countStudents(databasePath)
    .then((data) => {
      res.end(data);
    })
    .catch((err) => {
      res.status(500).end(err.message);
    });
});

// Make the server listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the Express app instance
module.exports = app;
