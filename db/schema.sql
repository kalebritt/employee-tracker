-- Create two new databases --
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

--use!
USE employee_db;

DROP TABLE IF EXISTS roles;
USE TABLE roles;

--this here table's for the deparment 
CREATE TABLE deparment (
    department_name VARCHAR(30) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
);

--role table
CREATE TABLE roles (
    title VARCHAR(30) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    deparment_id INT NOT NULL,
    salary DECIMAL NOT NULL,
);

--table where employees sit
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
);


