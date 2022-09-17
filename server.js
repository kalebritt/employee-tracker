//dependancies
const cTable = require("console.table");
const mysql = require("mysql2");
// const inquirer = require("inquirer");
const PORT = process.env.PORT || 3001;
//figlet fun
const figlet = require('figlet');

//console.log to see if figlet connected
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
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
