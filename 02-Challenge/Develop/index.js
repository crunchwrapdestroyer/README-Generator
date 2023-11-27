// TODO: Include packages needed for this application
const fs = require('fs/promises')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const { title } = require('process')


const licenseOptions = {
    "The MIT License":
    {
        name: 'MIT License',
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    },
    "IBM Public License":
    {
        name: 'IBM Public License',
        badge: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    },
    "Mozilla Public License":
    {
        name: 'Mozilla Public License',
        badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
}
const questions = [
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a short description of your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Describe the installation process for your project',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Provide instructions for using the application',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Enter the name and titles of the person(s) responsible for the project',
            name: 'credits'
        },
        {
            type: 'list',
            message: 'Please provide instructions for using the application',
            name: 'license',
            choices: Object.keys(licenseOptions)
        },
        {
            type: 'input',
            message: 'Please provide instructions for contribution to this project for future developers',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Please provide instructions for testing this application',
            name: 'test'
        },
    ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
        console.log(generateMarkdown(userInput))
      
        const readmeContent = generateMarkdown(userInput)
        return fs.writeFile('README.md', readmeContent);
      }
    )
}

// Function call to initialize app
init();
    