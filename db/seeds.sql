--department seeds
INSERT INTO deparment (department_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal'),
('Marketing'),
('Human Resources'),
('Customer Service');

--roles seeds
INSERT INTO roles (title, salary, deparment_id)
VALUES 
('Sales Lead', '100000', 1),
('Salesperson', '80000', 1),
('Lead Engineer', '150000', 2),
('Software Engineer', '120000', 2),
('Account Manager', '160000', 3),
('Accountant', '125000', 3),
('Legal Team Lead', '250000', 4),
('Lawyer', '190000', 4),
('Marketing Lead,', '100000', 5),
('Marketeer', '80000', 5),
('HR Head', '100000', 6),
('Customer Services Lead', '100000', 7),
('Customer Services Second', '80000', 7);


-- employee seeds
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Humphrey', 'Earwicker', 1)
('Leopold', 'Bloom', 1),
('Lt. Commander', 'Data', 2),
('Geordi', 'La Forge', 2),
('Blazes', 'Boylan', 3),
('Buck', 'Mulligan', 3),
('Kitty', 'Krause', 4),
('Cissy', 'Caffrey', 4),
('Gerty', 'MacDowell', 5),
('Mrs. Yelverton', 'Barry', 6),
('J.J.', 'Malloy', 7),
('Paddy', 'Dignam', 7);

