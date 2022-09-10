//dependancies
const cTable = require("console.table");
const mysql = require("mysql2");
const inquirer = require("inquirer");

//connection to database created
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    database: "employee_db",
  },
  console.log("connected, friendo, to employe_db")
);
