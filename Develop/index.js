const fs = require('fs')
const inquirer = require('inquirer')
function init() {
const questions = [
    {
    type: 'input',
    message: 'What is the title for your project?',
    name: 'title'
    },
    {
        type: 'input',
        message: 'Please briefly describe the purpose of this project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What steps are required to install this application, if any?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please explain how to use this application.',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What license is this project covered under, if any?',
        choices: [
                "A",
                "B",
                "C",
                "D"
        ],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Who are all contributors of this project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Does this project have any tests run?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];
inquirer.prompt(questions).then((answers) => {

const markdownContent = `
# ${answers.title}

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Test
${answers.test}

## Questions
${answers.github}
${answers.email}

`;
const filePath = 'README.md';
fs.writeFile(filePath, markdownContent, (err) => {
(err) ? console.error('Error writing to README file:', err) : console.log('README file (Markdown) has been written successfully.')
})
})
}

init();
