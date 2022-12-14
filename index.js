// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license are you using?',
      choices: ['MIT','Apache','BSD', 'none']
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please add a description of your project.',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'Describe challenge goals.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What did you constribute to the project.',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'How did you test the code',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers)=>{
    console.log(generateMarkdown(answers))
    fs.writeFileSync( path.join(process.cwd(),'GeneratedReadMe.md'), generateMarkdown(answers))
  })
}

// Function call to initialize app
init();
