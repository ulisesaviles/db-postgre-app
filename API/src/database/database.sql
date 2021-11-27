CREATE DATABASE test;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(45),
    email TEXT
);

INSERT INTO users (name, email) VALUES
('Ulises','u@cetys.edu.mx'),
('Omar','o@cetys.edu.mx'),
('Elian','e@cetys.edu.mx'),
('Marco','m@cetys.edu.mx'),
('Nestor','n@cetys.edu.mx'),
('Angel','a@cetys.edu.mx');