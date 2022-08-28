const fs = require("fs");
const inquirer = require("inquirer");

const initQuestions = [
    {
        message: "What is your first and last name?",
        name: "name"
    },
    {
        message: "What is you ID number?",
        name: "id"
    },
    {
        message: "What is your email address?",
        name: "email"
    },
    {
        message: "What is your office number?",
        name: "office"
    }
]

const initQuestions2 = [
    {
        type: "list",
        message: "Which of the following would you like to add?",
        choices: ['Engineer', 'Intern', 'Done'],
        name: "adding"
    }
]

const engineerQs = [
    {
        message: "Please enter the first and last name of the engineer:",
        name: "name"
    },
    {
        message: "Please enter engineer's email address:",
        name: "email"
    },
    {
        message: "Please enter engineer's ID:",
        name: "id"
    },
    {
        message: "Please enter engineer's Github profile:",
        name: "github"
    }
]

const internQs = [
    {
        message: "Please enter the first and last name of the intern:",
        name:"name"
    },
    {
        message: "Please enter the intern's email address:",
        name: "email"
    },
    {
        message: "Please enter the inter's ID:",
        name: "id"
    },
    {
        message: "Please enter the intern's college:",
        name: "college"
    }
]