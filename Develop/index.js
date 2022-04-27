// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        massage: 'What is the name of your project?'
        
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is your GitHub repo',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                return false;
            }
        }
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
        name: 'contributing',
        message: 'Contributing:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Licenses',
        choices: ['MIT', 'GIT', 'NONE', 'COLUMBIA']
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub username',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((userResponses) => {
        
        writeToFile('README.md', generateMarkdown({userResponses}));
    });

    

}

// Function call to initialize app
init();
