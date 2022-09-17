--deparement seeds
INSERT INTO deparment (department_name)
VALUES
('Sales'),
('Engineering'),
('Legal'),
('Marketing'),
('Finance'),
('Human Resources'),
('Customer Service'),
('Other');

--roles seeds
INSERT INTO roles (title, salary, deparment_id)
VALUES 
('Sales Lead', '100000', 1),
('Salesperson', '80000', 1),
('Lead Engineer', '150000', 2),
('Software Engineer', '120000', 2),

-- employee seeds
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES