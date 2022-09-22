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
          updateEmployeeRole();
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
      type: "input",
      name: "department_name",
      message: "What is the department name?",
    },
  ]);
}

//addRole function
function addRole() {
  inquirer.prompt([
    {
      type: "input",
      name: "role_id",
      message: "What is the role name?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the role salary?",
    },
    {
      type: "input",
      name: "department_name",
      message: "In what department is the role?",
    },
  ]);
}

//addEmployee function
function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the emloyee's first name?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name?",
    },
    {
      type: "input",
      name: "role_id",
      message: "What is the employee's role?",
    },
    {
      type: "input",
      name: "manager_id",
      message: "Who is the employee's manager?",
    },
  ]);
}
//updateEmployeeRole function
function updateEmployeeRole() {
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Which employee would you like to change?",
      choices: [
        "Humphrey Earwicker",
        "Leopold Bloom",
        "Lt. Commander Data",
        "Geordi La Forge",
        "Blazes Boylan",
        "Buck Mulligan",
        "Kitty Krause",
        "Cissy Caffrey",
        "Gerty MacDowell",
        "Mrs. Yelverton Barry",
        "J.J. Mallow",
        "Paddy Dignam",
      ],
    },
  ]);
}
