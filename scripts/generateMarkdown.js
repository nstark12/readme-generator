// destructuring and function to create a markdown file 
export const getMarkdown = ({title, description, installation, usage, license, contributing, tests, githubUsername, email}) => {

  return `
# ${title}
![Github licence](https://img.shields.io/badge/license-${license}-blue.svg)

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${installation}

## Usage

${usage}

## License

This project is licensed under ${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

Reach me with additional questions:

  * GitHub Username: ${githubUsername}
  * Email Address: ${email}

  `
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



