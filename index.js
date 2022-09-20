//dependancies
const cTable = require("console.table");
const inquirer = require("inquirer");
const db = require("./db/query");
const figlet = require("figlet");

init();

function init() {
  //console.log to see if figlet connected and a hard to read greeting
  figlet("Welcome to Employee Tracker!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
    mainPrompt();
  });
}

function mainPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "View All Departments",
          "View Roles",
          "View Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          "Quit",
        ],
      },
    ])
    .then(function (userInput) {
      switch (userInput.choice) {
        case "View All Departments":
          viewAllDepartments();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
          break;
        case "Add Department":
          addDepartment();
          break;
      }
    });
}
//view all departments function
function viewAllDepartments() {
  db.viewAllDepartments().then(([departments]) => {
    console.table(departments);
    mainPrompt();
  });
}
//view role function
function viewRoles() {
  db.viewRoles().then(([roles]) => {
    console.table(roles);
    mainPrompt();
  });
}
//view employee function
function viewEmployees() {
  db.viewEmployees().then(([employee]) => {
    console.table(employee);
    mainPrompt();
  });
}
//add department function


//add role function


//add employee function


//change employee role function
