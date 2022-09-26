DROP DATABASE IF EXISTS Employee_db;

CREATE DATABASE Employee_db;


USE Employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
   
);

CREATE TABLE rolee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    rolee_id INT NOT NULL,
    manager_id INT NOT NULL
    
);
