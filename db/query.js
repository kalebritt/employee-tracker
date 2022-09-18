const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  viewAllDepartments(){
    return this.connection.promise().query("SELECT department_name AS Department, id FROM department")
  }

  viewRoles(){
    return this.connection.promise().query("SELECT * FROM role")
  }

}



module.exports = new DB(connection)