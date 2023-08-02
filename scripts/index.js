// Include packages needed for this application
import fs from 'fs'
import inquirer from 'inquirer'
import { getMarkdown } from './generateMarkdown.js'

// Questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the project description?'
        },
        {
            type: 'checkbox',
            name: 'tableOfContents',
            message: 'Which sections are included in this project\'s README?',
            choices: ['installation', 'usage', 'license', 'contributing', 'tests', 'questions']
        },
        {
            type: 'input', 
            name: 'installation',
            message: 'What are the installation instructions for the project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for the project?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for the project',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.1', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unilicense']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the contribution guidelines for the project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions for the project?'
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }

    ])
        .then(answers => {
            const markdown = getMarkdown(answers)
            fs.writeFile(`../readme-files/${answers.title}.md`, markdown, err => {
                if (err) {
                    throw err
                }

                console.log(`${answers.title}.md saved!`)
            })
        })
        .catch(error => console.log(error))
}

questions();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
