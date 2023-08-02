// function to build table of contents
const buildTableOfContents = contents => contents
    .map(string => 
      `
        * [${string}](#-${string})
      `)
    .join('')

// destructuring and function to create a markdown file 
export const getMarkdown = ({title, description, tableOfContents, installation, usage, license, contributing, tests, githubUsername, email}) => {

  return `
# ${title}

${description}

## Table of Contents
${buildTableOfContents(tableOfContents)}

## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

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



