// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let coolBadge = '';

  if(license !== 'none') {
    coolBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }

  return coolBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = 'https://mit-license.org/';

  if(license !== 'none'){
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if(license !== 'none'){
    licenseSection += 'Please view License at ' + renderLicenseLink(license) + ' for more information.\n'
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const units = ['Description', 'Installation', 'Usage', 'Contributing', 'Tests', 'License', 'Questions'];

  // add title
  let readMeInput = '# ' + data.title + '\n';

  // add license badge
  readMeInput += renderLicenseBadge(data.license) + '\n';

  // add table of contents
  readMeInput += '## Table of Contents\n';
  for (let i=0; i<units.length; i++) {
    if (! (units[i] === "License" && data.license === 'none')) {
      readMeInput += i+1 + ". [" + units[i] + "](#" + units[i][0].toLowerCase() + units[i].substring(1) + ")\n";
    }
  }

  // add description
  readMeInput += "## " + units[0] + "\n";
  readMeInput += data.description + "\n";

  // add installation
  readMeInput += "## " + units[1] + "\n";
  readMeInput += data.installation + "\n";

  // add usage
  readMeInput += "## " + units[2] + "\n";
  readMeInput += data.usage + "\n";

  // add contributing
  readMeInput += "## " + units[3] + "\n";
  readMeInput += data.contributions + "\n";

  // add tests
  readMeInput += "## " + units[4] + "\n";
  readMeInput += data.tests + "\n";

  // add license
  readMeInput += '## ' + units[5] + '\n';
  readMeInput += renderLicenseSection(data.license) + "\n";

  // add questions
  readMeInput += "## " + units[6] + "\n";
  readMeInput += "You can find me [HERE](https://github.com/" + data.username + ") on Github.\n";
  readMeInput += "You can email me at " + data.email + " if you have any additional questions.\n"

  return readMeInput;
}

module.exports = generateMarkdown;
