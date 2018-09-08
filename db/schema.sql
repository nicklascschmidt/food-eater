/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database movie_planner_db and specified it for use.
CREATE DATABASE movie_planner_db;
USE movie_planner_db;

-- Create the table plans.
CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies (movie) VALUES ('Rush Hour 2');
INSERT INTO movies (movie) VALUES ('Kill Bill');
INSERT INTO movies (movie) VALUES ('Fight Club');


DROP DATABASE IF EXISTS foods_db;
CREATE DATABASE foods_db;
USE foods_db;

CREATE TABLE foods (
    id INT NOT NULL AUTO_INCREMENT,
    food_name VARCHAR(255) NOT NULL,
    eaten BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);



