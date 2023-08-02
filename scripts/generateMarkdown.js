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




