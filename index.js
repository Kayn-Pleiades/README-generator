// TODO: Include packages needed for this application
const fs = require('fs'); // Allows interaction with file system
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        }
        else {
            return console.log('File written!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
        ])
        .then((response) => {
            const fileName = './product/README.md';
            const title = `# ${response.title}${'\n'}`;
            const index = `${'\n'}## Table of Contents${'\n'}* [Description](#description)${'\n'}* [Installation](#installation)${'\n'}* [Usage](#usage)${'\n'}* [Credits](#credits)${'\n'}* [License](#license)${'\n'}* [Contributing](#contributing)${'\n'}* [Tests](#tests)${'\n'}* [Questions](#questions)`
            const content = title + index;

            writeToFile(fileName, content);
        }
        );
}

// Function call to initialize app
init();
