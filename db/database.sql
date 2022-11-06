CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(

    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
)
DESCRIBE employee;

INSERT INTO employee VALUES
(1,'Shorlak',5000),
(2,'Shorlak2',5000),
(3,'Shorlak3',5000)

SELECT * FROM employee