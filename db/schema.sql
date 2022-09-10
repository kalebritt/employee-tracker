-- Create two new databases --
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

--use!
USE employee_db;

DROP TABLE IF EXISTS roles;
USE TABLE roles;

--this here table's for the deparment 
CREATE TABLE deparment (
    name VARCHAR(30) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
)


