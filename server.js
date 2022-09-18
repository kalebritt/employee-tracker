//dependancies
const express = require("express");
const cTable = require("console.table");
const mysql = require("mysql2");
// const inquirer = require("inquirer");
const PORT = process.env.PORT || 3001;
//express
const app = express();
//figlet fun
const figlet = require("figlet");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//console.log to see if figlet connected
figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

//console.log to see if connected to database
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    database: "employee_db",
  },
  console.log("connected, friendo, to employe_db")
);

//listnerapp
app.listen(PORT, () => {
  console.log(`here we go again at ${PORT}`);
});
