// TODO: Include packages needed for this application
const fs = require('fs'); // Allows interaction with file system

const content = 'test' // Sample content. To be removed after. 

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    fs.writeFile('./product/README.md', content, err => {
        if (err) {
            return console.error(err);
        }
    });
}

// Function call to initialize app
init();
