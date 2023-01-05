const inquirer = require("inquirer");

const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "Provide a quick description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Provide installation information about your project.",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide usage information for your project.",
      name: "usage",
    },
    {
      type: "input",
      message: "Provide information on how to run tests for your application.",
      name: "tests",
    },
    {
      type: "list",
      message: "Which license does your project utilize?",
      name: "license",
      choices: [
        "MIT",
        "Mozilla Public",
        "Boost Software",
        "Eclipse Public",
        "The Unilicense",
      ],
    },
    {
      type: "input",
      message:
        "Provide a list of those that have contributed to this project, if any.",
      name: "contributors",
    },
  ])
  .then((response) => {
    console.log(response);
    fs.writeFile("README.md", readMeGen(response), (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
function readMeGen(data) {
  const {
    title,
    username,
    description,
    installation,
    usage,
    contributors,
    license,
    email,
    tests,
  } = data;
  return `# ${title}
https://github.com/${username}/${title}
# Description
${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
# Installation
${installation}
# Usage
${usage}
# Contributors
${contributors}
# License
This project uses the ${license} license.
![Github license](https://img.shields.io/badge/license-${license}-blue.svg)
# Tests
The steps needed to run the test are as follows: 
${tests}
# Questions
Contact me at ${email} for any questions. 
`;
}
