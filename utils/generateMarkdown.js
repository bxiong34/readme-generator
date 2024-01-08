// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  if (!licenses || licenses.length === 0) {
    return '';
  }

  const badges = licenses.map((license) => {
  if (license === "Apache-2.0") {
    return ('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
    }  else if(license === "GPL-3.0-only") {
      return ('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
    }  else if(license === 'MPL-2.0') {
      return ('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
    } else if(license === 'EPL-2.0') {
        return ('[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)');
    } else if(license === 'MIT') {
        return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
    } else if(license === 'BSD-2-Clause') {
         return ('[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)');
    } else {
      return ('[![License](https://img.shields.io/badge/License-Unknown-lightgrey.svg)](https://opensource.org/licenses/Unknown)');
    }
  });
  return badges.join(' ');
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License 
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  - [License](#license)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Contributing 
  ${data.contributing}

  ## Tests 
  ${data.tests}
  ## Questions 
  If there are any questions, please reach out to me by
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})`
}

module.exports = generateMarkdown;
