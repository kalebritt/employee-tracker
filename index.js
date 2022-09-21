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
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeROle();
          break;
      }
    });
}
//viewAllDepartments function
function viewAllDepartments() {
  db.viewAllDepartments().then(([departments]) => {
    console.table(departments);
    mainPrompt();
  });
}
//viewRole function
function viewRoles() {
  db.viewRoles().then(([roles]) => {
    console.table(roles);
    mainPrompt();
  });
}
//viewEmployee function
function viewEmployees() {
  db.viewEmployees().then(([employee]) => {
    console.table(employee);
    mainPrompt();
  });
}
//addDepartment function
function addDepartment() {
  inquirer.prompt([
    {
      name: "name",
      value: "What is the department name?",
    },
  ]);
}

//addRole function
function addRole() {
  inquirer.prompt([
    {
      name: "name",
      value: "What is the role name?",
    },
    {
      name: "salary",
      value: "What is the role salary?",
    },
    {
      name: "department",
      value: "In what department is the role?",
    },
  ]);
}

//addEmployee function
function addEmployee() {
  inquirer.prompt([
    {
      name: "first name",
      value: "What is the emloyee's first name?",
    },
    {
      name: "last name",
      value: "What is the employee's last name?",
    },
    {
      name: "role",
      value: "What is the employee's role?",
    },
    {
      name: "manager",
      value: "Who is the employee's manager?",
    },
  ]);
}
//changeEmployeeRole function
