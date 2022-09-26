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
function generateMarkdown(answer) {




    let titleString = "# Title: " + `${answer.title}\n\n`;
    let discription = "## Discription:\n" + `* ${answer.discription}\n`;
    let motivation = "- What was your motivation? " + `- ${answer.motivation}\n`;
    let why = "- Why did you build this project? " + `- ${answer.motivation}\n`;
    let problem = "- What problem does it solve? " + `- ${answer.motivation}\n`;
    let learn = "- What did you learn? " + `- ${answer.motivation}\n\n`;
    let tableContents = "## Table of Contents (optional)\n";
    let installation = "- [Installation](#installation)\n";
    let usage = "- [Usage](#usage)\n";
    let credits = "- [Credits](#credits)\n";
    let license = "- [License](#license)\n\n";
    let installationD = "## Installation:\n";
    let installl = "- What are the steps to install your project?\n" + `* ${answer.install}\n\n`;
    let usageD = "## Usage:\n";
    let screenshot = "Add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: '![alt text](assets/images/screenshot.png)'\n";
    let usagescreenshot = "screenshot:" + `${answer.usage}\n\n`;
    let creditsD = "## Credits:\n";
    let collaborators = "* Collaborators: " + `${answer.collaborators}\n`;
    let assets = "* Assets: " + `${answer.assets}\n`;
    let tutorials = "* Tutorials: " + `${answer.tutorials}\n`;
    let features = "* Features: " + `${answer.features}\n`;
    let links = "## Links:\n";
    let github = "* Github link: " + `${answer.github}\n`;
    let projectlink = "* Deployed link: " + `${answer.links}\n`;





    console.log(answer);

    let content = "";
    content = content + titleString + discription + motivation + why + problem + learn + tableContents + installation + usage + credits +
        license + installationD + installl + usageD + screenshot + usagescreenshot + creditsD + collaborators + assets + tutorials + features + links + github + projectlink;
    console.log(content);

    return content;

};

module.exports = generateMarkdown;