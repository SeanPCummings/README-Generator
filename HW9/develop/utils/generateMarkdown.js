// function to generate markdown for README
function generateMarkdown(data, gitInput) {
  return `
# --${data.title}--
## Description 
${data.description}
## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [License](#License)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributing}
## License
${data.license}
## Test
${data.test}
## Repository
- [Project Repo](${data.repo})
## GitHub
![Profile Picture](${gitInput.githubImage})
- ${gitInput.name}
- [GitHub Profile](${gitInput.profile})
- <${gitInput.email}>
`;
}

module.exports = generateMarkdown;
