// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    case 'none':
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `[License](#license)`
  } else return ''
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## License`
  } else return ''
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license)
  let link = renderLicenseLink(data.license)
  let section = renderLicenseSection(data.license)
  return `# ${data.title}
  ${badge}

  ## Description
  - [Description](##Description)
  ${data.description} 
  ## Table of Contents
  - [Instructions](##Instructions)
  - [Constribution](##Constribution)
  - [Testing](##Testing)
  - [License](##License)
  - [Creator](##Creator)
  ## Instructions
  ${data.instructions}
  ## Contribution
  ${data.contribution}
  ## Testing
  ${data.testing}
  ## License
  ${link}
  ${section}
  ## Creator
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
