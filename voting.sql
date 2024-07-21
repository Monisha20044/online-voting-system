CREATE DATABASE voting_system;

USE voting_system;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE votes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    candidate VARCHAR(50) NOT NULL,
    FOREIGN KEY (username) REFERENCES users(username)
);
