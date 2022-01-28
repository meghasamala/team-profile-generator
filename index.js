const inquirer = require("inquirer")
const fs = require("fs");
// const writeFile = require("./utils/generatePage.js")
const generateProfiles = require("./src/template.js")
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const allEmployees = [];

const startTeamBuilder = () => {
    console.log("Build profiles for the members of your team!")
    return addNewEmployee();
};

const addNewEmployee = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'newEmployee',
            message: "Add an employee to the team: ",
            choices: ['Manager', 'Engineer', 'Intern', 'No more members']
        }
    )
    .then(choice => {
        const { newEmployee } = choice;
        if (newEmployee === 'Manager') {
            return addEmployee(newEmployee);
        } else if (newEmployee === 'Engineer') {
            return addEmployee(newEmployee);
        } else if (newEmployee === 'Intern') {
            return addEmployee(newEmployee);
        } else {
            writeToFile(allEmployees);
        }
    })
}

const addEmployee = function (employeeType) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name: ",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("You must enter a name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID number: ",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("You must enter an ID number.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email address: ",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("You must enter an email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number: ",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("You must enter an office number.");
                    return false;
                }
            },
            when: () => {
                if (employeeType === 'Manager') {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's Github username: ",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("You must enter a Github username.");
                    return false;
                }
            },
            when: () => {
                if (employeeType === 'Engineer') {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school name: ",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("You must enter a school name.");
                    return false;
                }
            },
            when: () => {
                if (employeeType === 'Intern') {
                    return true
                } else {
                    return false
                }
            }
        },
    ])
    .then(profileData => {
        if (employeeType === 'Manager') {
            const {name, id, email, officeNumber} = profileData
            const manager = new Manager(name, id, email, officeNumber);
            allEmployees.push(manager);
            addNewEmployee();
        } else if (employeeType === 'Engineer') {
            const {name, id, email, github} = profileData
            const engineer = new Engineer(name, id, email, github);
            allEmployees.push(engineer);
            addNewEmployee();
        } else if (employeeType === 'Intern') {
            const {name, id, email, school} = profileData
            const intern = new Intern(name, id, email, school);
            allEmployees.push(intern);
            addNewEmployee();   
        }
    })
};

const writeToFile = fileContent => {
    const pageHTML = generateProfiles(fileContent)
    fs.writeFile("./dist/index.html", pageHTML, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("File created successfully")
        
    }) 
}


startTeamBuilder()
