const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generate = require("./utils/generateMarkdown")
// array of questions for user
const questions = [
    {
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
	
	{
		type: "input",
		name: "description",
		message: "Describe your project.",
	},
	{
		type: "input",
		name: "installation",
		message: "Installation instructions",
	},
	{
		type: "input",
		name: "usage",
		message: "How would one use this project?",
	},
	{
		type: "input",
		name: "license",
		message: "Do you have a protective license?",
	},
	{
		type: "input",
		name: "contribute",
		message: "Is there anyone else helping this project? Type their Github username.",
	},
	{
		type: "input",
		name: "test",
		message: "Has the project been tested?",
	},
	{
		type: "input",
		name: "username",
		message: "What is your github user name?",
	},
	{
		type: "input",
		name: "repo",
		message: "What is the link to the repo?",
	},
];

inquirer.prompt(questions).then(function(data){
    const url = `https://api.github.com/users/${data.username}`;

    axios.get(url).then(function (response){
        const gitInput = {
            githubImage: response.data.avatar_url,
            name: response.data.name,
            profile: response.data.html_url,
            email: response.data.email

        };
        fs.writeFile("README.md", generate(data, gitInput), function (err){
            if(err){
                throw err;
            }
            console.log("README created successfully");
        } )
    });
});

function init() {}

init();