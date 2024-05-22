#!/usr/bin/env node

const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

if (!url) {
    console.error('Usage: ./2-statuscode.js <URL>');
    process.exit(1);
}

// Make a GET request to the provided URL
request(url, (error, response) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }
    // Print the status code
    console.log(`code: ${response.statusCode}`);
});

