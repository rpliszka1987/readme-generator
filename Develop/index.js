// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        massage: 'What is the name of your project?'
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description:'
        
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'Installation Instructions:'
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage:'

    },
    {
        type: 'input',
        name: 'contributiing',
        message: 'Contributing:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests:'
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Licenses',
        choices: ['MIT', 'GIT', 'NONE', 'COLUMBIA']
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((userResponses) => {
        console.log(userResponses);
    });

    

}

// Function call to initialize app
init();
