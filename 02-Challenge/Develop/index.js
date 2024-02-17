// TODO: Include packages needed for this application
const fs = require('fs/promises')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

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
            message: 'Please select a license',
            name: 'license',
            choices: [
                'MIT License',
                'IBM Public License',
                'Mozilla Public License'
            ]
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

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
        console.log(generateMarkdown(userInput))
        const readmeContent = generateMarkdown(userInput)
        return fs.writeFile('README.md', readmeContent);
      }
    )
    .then(() => {
        console.log('README.md successfully generated.');
    })
    .catch((err) => {
        console.error('Error generating README:', err);
    });
}

// Function call to initialize app
init();

