// TODO: Include packages needed for this application
const fs = require('fs/promises')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const { title } = require('process')
// THEN a high-quality, professional README.md is generated with the title of 
//my project and sections entitled Description, Table of Contents, Installation, 
//Usage, License, Contributing, Tests, and Questions

## Title
## Description
## Table of Contents
## Installation
## Uses
## Credits
## License
## Badges



const questions = [
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please enter a short description of your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Describe the installation process for your project',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Please provide instructions for using the application',
            name: 'instructions'
        },
        {
            type: 'list',
            message: 'Please select the type of license to use for your project',
            name: 'license',
            choices: [
                'MIT',
                'other',
                'another',
            ]
            
        },
        
    ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    // const data = {title: "readMeTitle"}
    // console.log(generateMarkdown(data))
    inquirer.prompt(questions)
    .then((userInput) => {
        console.log(generateMarkdown(userInput))
    }
    )
}

// Function call to initialize app
init();
    