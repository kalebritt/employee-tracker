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
        case "Quit":
          process.exit();
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
  inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "What is the department name?",
      },
    ])
    .then(({ department_name }) => {
      db.addDepartment({ department_name }).then(() => {
        console.log(`Added ${department_name} to db`);
        mainPrompt();
      });
    });
}

//addRole function
function addRole() {
  db.viewAllDepartments().then(([departments]) => {
    const departmentChoices = departments.map((x) => {
      return { name: x.Department, value: x.id };
    });

    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What is the role?",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the role's salary?",
        },
        {
          type: "list",
          name: "department_id",
          message: "In what department is the role?",
          choices: departmentChoices,
        },
      ])
      .then(({ title, salary, department_id }) => {
        db.addRole({
          title,
          salary,
          department_id,
        }).then(() => {
          console.log(`Role ${title} added to db`);
          mainPrompt();
        });
      });
  });
}

//addEmployee function
function addEmployee() {
  db.viewRoles().then(([roles]) => {
    const roleChoices = roles.map((role) => {
      return { name: role.title, value: role.id };
    });

    db.viewEmployees().then(([employees]) => {
      const employeeChoices = employees.map((employee) => {
        return {
          name: employee.first_name + " " + employee.last_name,
          value: employee.id,
        };
      });

      inquirer
        .prompt([
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
            type: "list",
            name: "role_id",
            message: "What is the employee's role?",
            choices: roleChoices,
          },
          {
            type: "list",
            name: "manager_id",
            message: "Who is the employee's manager?",
            choices: employeeChoices,
          },
        ])
        .then(({ first_name, last_name, role_id, manager_id }) => {
          db.addEmployee({
            first_name,
            last_name,
            role_id,
            manager_id,
          }).then(() => {
            console.log(`Employee ${first_name} ${last_name} added to db`);
            mainPrompt();
          });
        });
    });
  });
}
//updateEmployeeRole function
function updateEmployeeRole() {
  db.viewEmployees().then(([employees]) => {
    const employeeChoices = employees.map((employee) => {
      return {
        name: employee.first_name + " " + employee.last_name,
        value: employee.id,
      };
    });

    db.viewRoles().then(([roles]) => {
      const roleChoices = roles.map((role) => {
        return { name: role.title, value: role.id };
      });

      inquirer
        .prompt([
          {
            type: "list",
            name: "employeeID",
            message: "Which employee would you like to update?",
            choices: employeeChoices,
          },
          {
            type: "list",
            name: "roleID",
            message:
              "Which role do you want to assign to the selected employee?",
            choices: roleChoices,
          },
        ])
        .then(({ employeeID, roleID }) => {
          db.updateRole(employeeID, roleID).then(() => {
            console.log("Employee role update");
            mainPrompt();
          });
        });
    });
  });
}
