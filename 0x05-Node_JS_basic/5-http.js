#!/usr/bin/env node

const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

// Path to the CSV file (passed as an argument when running the script)
const databasePath = process.argv[2];

// Create an HTTP server
const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        // Handle root path
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (parsedUrl.pathname === '/students') {
        // Handle /students path
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        
        // Call countStudents and handle the promise
        countStudents(databasePath)
            .then(() => res.end())
            .catch((error) => {
                res.write(`${error.message}\n`);
                res.end();
            });
    } else {
        // Handle unknown paths
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Make the server listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
