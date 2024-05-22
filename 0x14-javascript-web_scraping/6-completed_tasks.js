#!/usr/bin/env node

const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

if (!apiUrl) {
    console.error('Usage: ./6-completed_tasks.js <API_URL>');
    process.exit(1);
}

// Make a GET request to the provided API URL
request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error(`Failed to fetch data: ${response.statusCode}`);
        return;
    }

    // Parse the JSON response
    const todos = JSON.parse(body);
    const completedTasksByUser = {};

    // Iterate over the todos and count the completed tasks for each user
    todos.forEach(todo => {
        if (todo.completed) {
            if (completedTasksByUser[todo.userId]) {
                completedTasksByUser[todo.userId]++;
            } else {
                completedTasksByUser[todo.userId] = 1;
            }
        }
    });

    // Print the result
    console.log(completedTasksByUser);
});

