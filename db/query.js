const { query } = require("./connection");
const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  viewAllDepartments() {
    return this.connection
      .promise()
      .query("SELECT department_name AS Department, id FROM department");
  }

  viewRoles() {
    return this.connection.promise().query("SELECT * FROM role");
  }

  viewEmployees() {
    return this.connection.promise().query("SELECT * FROM employee");
  }

  addDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }
}

module.exports = new DB(connection);
