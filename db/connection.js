const mysql = require("mysql2");

//console.log to see if connected to database
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    database: "employee_db",
    password: "xqa^NhYJO1#yQ5X%UfD",
  },
  console.log("connected, friendo, to employe_db")
);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
