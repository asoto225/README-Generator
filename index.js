// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const licenses = ['none', 'MIT']
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter information on how to use this project:'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter contributions:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the testing instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter project license:',
        choices: licenses
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = './README.md'

    fs.writeFile(fileName, data, function (err){
        err ? console.log(err) : console.log(fileName + ' created.')
    });
};

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
