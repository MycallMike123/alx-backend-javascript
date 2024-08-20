#!/usr/bin/env node

const fs = require('fs');

/**
 * Reads a CSV file and counts the number of students in each field.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(path, 'utf8');

        // Split the file content by new lines
        const lines = data.split('\n').filter(line => line.trim() !== '');

        // Remove the header line
        const header = lines.shift();

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        // Initialize a map to store the students by field
        const studentsByField = {};

        // Process each line
        for (const line of lines) {
            const [firstname, lastname, age, field] = line.split(',');

            if (!studentsByField[field]) {
                studentsByField[field] = [];
            }
            studentsByField[field].push(firstname);
        }

        // Log the total number of students
        const totalStudents = lines.length;
        console.log(`Number of students: ${totalStudents}`);

        // Log the number of students in each field and their names
        for (const [field, students] of Object.entries(studentsByField)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
    } catch (error) {
        // Handle errors, such as file not found
        console.error('Cannot load the database');
    }
}

module.exports = countStudents;
