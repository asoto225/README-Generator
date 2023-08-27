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
    licenseSection += 'Please view License at ' + renderLicenseLink(license) + 'for more information.\n'
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const units = ['Description', 'Installation', 'Usage', 'Contributing', 'Tests', 'License', 'Questions'];

  // add title
  let markdown = '# ' + data.title + '\n';

  // add license badge
  markdown += renderLicenseBadge(data.license) + '\n';

  // add table of contents
  markdown += '## Table of Contents\n';
  for (let i=0; i<units.length; i++) {
    if (! (units[i] === "License" && data.license === 'none')) {
      markdown += i+1 + ". [" + units[i] + "](#" + units[i][0].toLowerCase() + units[i].substring(1) + ")\n";
    }
  }

  // add description
  markdown += "## " + units[0] + "\n";
  markdown += data.description + "\n";

  // add installation
  markdown += "## " + units[1] + "\n";
  markdown += data.installation + "\n";

  // add usage
  markdown += "## " + units[2] + "\n";
  markdown += data.usage + "\n";

  // add contributing
  markdown += "## " + units[3] + "\n";
  markdown += data.contributions + "\n";

  // add tests
  markdown += "## " + units[4] + "\n";
  markdown += data.tests + "\n";

  // add license
  markdown += '## ' + units[5] + '\n';
  markdown += renderLicenseSection(data.license) + "\n";

  // add questions
  markdown += "## " + units[6] + "\n";
  markdown += "You can find me [HERE](https://github.com/" + data.username + ") on Github\n";
  markdown += "You can email me at " + data.email + " if you have any additional questions.\n"

  return markdown;
}

module.exports = generateMarkdown;
