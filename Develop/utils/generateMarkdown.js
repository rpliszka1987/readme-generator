// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, repo, description, instalation, usage, contributing, tests, license, github, email} = data.userResponses;
  console.log(data);
  return `
  # ${title}

  ## Description

  * ${description}

  ## Table of Content

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contibution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  

  ## Installation
  * ${instalation}

  ## Usage
  * ${usage}

  ## Credits
  * ${contributing}

  ## Tests
  * ${tests}

  ## License
  * ${license}

  
  ## Badges
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${github}/${repo}?style=flat&logo=appveyor)
  

  ## Questions

  For question please use information below:

  * GitHub: [${github}](https://github.com/${github})
  * Email: [${email}](mailto:${email})
  
  [Top](#description)
  
`;
}

module.exports = generateMarkdown;
