// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  console.log(license)
  if (license) {
  // Get the license option from the licenseOptions object
  

  if (license === 'MIT License') {
    // Return the badge associated with the license
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  else if (license === 'IBM Public License') {
    return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"
  }
  else {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  }
  }
  else {
    return ''}
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  return `
  # ${data.title}
  # ${licenseBadge}
  ## Description
  ${data.description}
  ## Table of Contents
  ## installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  This project is licensed under the ${data.license}.
  ## Contribution
  ## Test Instructions
`
}

module.exports = generateMarkdown;
