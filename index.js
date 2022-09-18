//dependancies
const cTable = require("console.table");
const inquirer = require("inquirer");
const db = require('./db/query')

//figlet fun
const figlet = require("figlet");

init();

function init() {
  //console.log to see if figlet connected
  figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
    mainPrompt()
  })
}

function mainPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: ["View All Departments", "View Roles"],
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
      }
    });


}

function viewAllDepartments(){
  db.viewAllDepartments().then(([departments])=>{
    console.table(departments)
    mainPrompt()
  })
}

function viewRoles(){
  db.viewRoles().then(([roles])=>{
    console.table(roles)
    mainPrompt()
  })
}