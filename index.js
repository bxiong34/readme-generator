// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: "Title",
    },
    {
      type: 'input',
      message: 'What was your motivation? What problem does the application solve?',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use.',
      name: 'Usage',
    },
    {
        type: 'input',
        message: 'Choose a license for you project.',
        name: 'License',
      },
    {
      type: 'input',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
      name: 'Contributing',
    },
    {
      type: 'input',
      message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
      name: 'Tests',
    },
  ];

  // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        } else {
        console.log('Your README File has been created!');
        }
    })
};
  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
   .then(function (userInput) {
        console.log(userInput)

    writeToFile('./utils/README.md', generateMarkdown(userInput));
   });
};

// Function call to initialize app
init();
