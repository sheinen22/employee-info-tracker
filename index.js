const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

const Intern = require('./Develop/lib/Intern');
const Engineer = require('./Develop/lib/Engineer');
const Manager = require('./Develop/lib/Manager');

//need an update area - possibly three empty arrays?
const managerArr = [];
const engineerArr = [];
const internArr = [];

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

//init function to prompt questions and push new manager and get to next series of questions
function init() {
    inquirer.prompt(initQuestions).then(({name, id, email, office}) => {
        managerArr.push(new Manager (name, id, email, office))
        next()
    })
}

//next function - think i can use if/else to separate whether intern or engineer was chosen to run one of the next functions
function next() {
    inquirer.prompt(initQuestions2).then((data) => {
        if (data.adding === "Engineer") {
            engineerPrompt()
        } else if (data.adding === "Intern") {
            internPrompt()
        } else {
            writeToFile()
        }
    })
}

//engineer function to prompt engineer questions and push new engineer, should be almost the same as manager function - office + git hub and return to questions
function engineerPrompt() {
    inquirer.prompt(engineerQs).then(({name, email, id, github}) => {
        engineerArr.push(new Engineer (name, email, id, github))
        next()
    })
}
//intern function to prompt inter questions and push new engineer, exactly like engineer function but - github + school.
function internPrompt() {
    inquirer.prompt(internQs).then(({name, email, id, college}) => {
        internArr.push(new Intern (name, email, id, college))
        next()
    })
}

function writeToFile(managerArr, engineerArr, internArr) {
    //fs.writeToFile(".pathtohtml", need to link a js from src? with a return statement(managerArr, engineerArr, internArr), (err) => (err) ? console.log("could not generate html") : console.log("HTML successfully generated")
}