// TODO: Include packages needed for this application
const fs = require('fs'); // Allows interaction with file system
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?','Please enter a description of your project.','Please describe how to install your project.','Please describe how to use your project.','Please share any resources that were utilized in the creation of your project.','Please select a license for your project.'];

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
            {
                type: 'editor',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'editor',
                message: questions[2],
                name: 'install',
            },
            {
                type: 'editor',
                message: questions[3],
                name: 'useage',
            },
            {
                type: 'editor',
                message: questions[4],
                name: 'credits',
            },
            {
                type: 'list',
                message: questions[5],
                name: 'license',
                choices: ['none', 'test'],
            },
        ])
        .then((response) => {
            const fileName = './product/README.md';
            const title = `# ${response.title}${'\n'}`;
            const index = `${'\n'}## Table of Contents${'\n'}${'\n'}* [Description](#description)${'\n'}* [Installation](#installation)${'\n'}* [Usage](#usage)${'\n'}* [Credits](#credits)${'\n'}* [License](#license)${'\n'}* [Contributing](#contributing)${'\n'}* [Tests](#tests)${'\n'}* [Questions](#questions)${'\n'}`
            const desc = `${'\n'}## Description${'\n'}${'\n'}${response.description}${'\n'}`;
            const install =`${'\n'}## Installation${'\n'}${'\n'}${response.install}${'\n'}`;
            const useage = `${'\n'}## Useage${'\n'}${'\n'}${response.useage}${'\n'}`;
            const credits = `${'\n'}## Credits${'\n'}${'\n'}${response.credits}${'\n'}`;
            const license = `${'\n'}## License${'\n'}${'\n'}${response.license}${'\n'}`;

            const content = title + index + desc + install + useage + credits + license;

            writeToFile(fileName, content);
        }
        );
}

// Function call to initialize app
init();
