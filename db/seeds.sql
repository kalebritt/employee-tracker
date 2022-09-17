--deparement seeds
INSERT INTO deparment (department_name)
VALUES
('Sales'),
('Legal'),
('Marketing'),
('Engineering'),
('Finance'),
('Human Resources'),
('Customer Service'),
('Other');

--roles seeds
INSERT INTO roles (title, salary, deparment_id)
VALUES 

-- employee seeds
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES