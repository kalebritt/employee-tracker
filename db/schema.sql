-- Create two new databases --
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

--use!
USE employee_db;

--this here table's for the deparment 
CREATE TABLE department (
    department_name VARCHAR(30) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

--role table
CREATE TABLE role (
    title VARCHAR(30) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    deparment_id INT NOT NULL,
    salary DECIMAL NOT NULL,
    FOREIGN KEY (deparment_id) REFERENCES department(id) ON DELETE CASCADE
);

--table where employees sit
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);


