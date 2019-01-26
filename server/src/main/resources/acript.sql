CREATE DATABASE employeedb; 

USE employeedb; 

CREATE TABLE IF NOT EXISTS user 
  ( 
     id      			INT auto_increment PRIMARY KEY NOT NULL, 
     name    			VARCHAR(50) NOT NULL,
     department			VARCHAR(50) NOT NULL,
     username			VARCHAR(50) UNIQUE NOT NULL,
     password			VARCHAR(100) NOT NULL,
     salary				INTEGER(50) NOT NULL,
     email				VARCHAR(50) UNIQUE NOT NULL,
	 created_by			VARCHAR(30) DEFAULT NULL,
	 created_date		TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	 last_modified_by 	VARCHAR(30) DEFAULT NULL, 
     last_modified_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
  ); 

INSERT INTO user (id, name, department, username, password, salary, email) VALUES (1, 'Alex','Knr', 'alex123','$2y$12$AjXoJHNneLs3YIPl0O.vv.FwlwULUvvy/S3ObANSlfCMWlM.9TZb2', 3456, 'alex@gmail.com');
INSERT INTO user (id, name, department, username, password, salary, email)  VALUES (2, 'Tom', 'Asr', 'tom234', '$2y$12$4GWWmNNaifURrfH0FLv/Leg4KH15lkVtJdhvnHF2/3BCAX8CWwj0m', 7823, 'tom@gmail.com');
INSERT INTO user (id, name, department, username, password, salary, email)  VALUES (3, 'Adam', 'Psr', 'adam', '$2y$12$LlH7enbawq9rtHCmHp9rFu3xjS6lEfINIsItzmCJJyeiVaNF546Kq', 4234, 'adam@gmail.com');