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
            choices: ['Apache_2.0', 'GPLv3', 'MIT', 'BSD_2--Clause', 'BSD_3--Clause', 'Boost_1.0', 'EPL_1.0', 'GPL_v2', 'LGPL_v3', 'MPL_2.0', 'Unilicense']
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


