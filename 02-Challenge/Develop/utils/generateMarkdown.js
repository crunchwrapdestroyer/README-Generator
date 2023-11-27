// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
  {if (license) {
  // Get the license option from the licenseOptions object
  const licenseOption = licenseOptions[license];
  if (licenseOption) {
    // Return the badge associated with the license
    return licenseOption.badge;
  }
}
return '';
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
