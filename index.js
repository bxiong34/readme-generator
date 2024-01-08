// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log('Answer all the questions to generate yourself a README file!');

const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: "title",
    },
    {
      type: 'checkbox',
      message: 'Choose a license for you project.',
      name: 'license',
      choices: ['Apache-2.0', 'GPL-3.0-only', 'MPL-2.0', 'EPL-2.0', 'MIT', 'BSD-2-Clause', 'None of the above'],
    },
    {
      type: 'input',
      message: 'What was your motivation? What problem does the application solve?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'How can users contribute to the project?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'How do users test this?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter your Github username.',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter your email address.',
      name: 'email',
    },
  ];

  // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log('Error writing README file.');
        } else {
          console.log('Your README File has been created!');
        }
    })
};
  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
   .then((input) => {
        console.log(input);

    writeToFile('./generated-readme/README.md', generateMarkdown(input));
   });
};

// Function call to initialize app
init();
