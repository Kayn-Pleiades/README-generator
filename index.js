// TODO: Include packages needed for this application
const fs = require('fs'); // Allows interaction with file system
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Please enter a description of your project.', 'Please describe how to install your project.',
    'Please describe how to use your project.', 'Please share any resources that were utilized in the creation of your project.', 
    'Please select a license for your project.','How can others contribute to your project?','Please describe how to test your project.','What is your GitHub username?',
    'What is your email?'];

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
                message: questions[8],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[9],
                name: 'email',
            },
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'install',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'useage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'credits',
            },
            {
                type: 'list',
                message: questions[5],
                name: 'license',
                choices: ['none', 'test'],
            },
            {
                type: 'input',
                message: questions[6],
                name: 'contr',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'tests',
            },
        ])
        .then((response) => {
            const fileName = './product/README.md';
            const title = `# ${response.title}${'\n'}`;
            const index = `${'\n'}## Table of Contents${'\n'}${'\n'}* [Description](#description)${'\n'}* [Installation](#installation)${'\n'}* [Usage](#usage)${'\n'}* [Credits](#credits)${'\n'}* [License](#license)${'\n'}* [Contributing](#contributing)${'\n'}* [Tests](#tests)${'\n'}* [Questions](#questions)${'\n'}`
            const desc = `${'\n'}## Description${'\n'}${'\n'}${response.description}${'\n'}`;
            const install = `${'\n'}## Installation${'\n'}${'\n'}${response.install}${'\n'}`;
            const useage = `${'\n'}## Useage${'\n'}${'\n'}${response.useage}${'\n'}`;
            const credits = `${'\n'}## Credits${'\n'}${'\n'}${response.credits}${'\n'}`;
            const license = `${'\n'}## License${'\n'}${'\n'}${response.license}${'\n'}`;
            const contr = `${'\n'}## Contributing${'\n'}${'\n'}${response.contr}${'\n'}`;
            const tests = `${'\n'}## Tests${'\n'}${'\n'}${response.tests}${'\n'}`;
            const subject = `Question regarding ${response.title}`;
            const email = `mailto:${response.email}?subject=${subject}`;
            const ques = `${'\n'}## Questions${'\n'}${'\n'}For any questions you may have, you can reach me [via GitHub](https://github.com/${response.username}) or [via email](${email}) ${'\n'}`;

            const content = title + index + desc + install + useage + credits + license + contr + tests + ques;

            writeToFile(fileName, content);
        }
        );
}

// Function call to initialize app
init();
