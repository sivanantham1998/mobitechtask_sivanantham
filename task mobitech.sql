CREATE DATABASE mobitech;
USE mobitech;
CREATE TABLE categories(id INT PRIMARY KEY AUTO_INCREMENT,NAME VARCHAR(100),DESCRIPTION TEXT,created_at TIMESTAMP);
DESC categories;
CREATE TABLE produts(id INT PRIMARY KEY AUTO_INCREMENT,NAME VARCHAR(150),price DECIMAL(10,2),stocks INT,create_at TIMESTAMP,category_id INT,FOREIGN KEY (category_id) REFERENCEs categories(id));
DESC produts;
CREATE TABLE customer(id INT PRIMARY KEY AUTO_INCREMENT,NAME VARCHAR(150),email VARCHAR(150),phone VARCHAR(20),created_at TIMESTAMP);
CREATE table orders(id INT PRIMARY KEY AUTO_INCREMENT,total_amount DECIMAL(10,2),STATUS ENUM('pending','paid','cancelled') DEFAULT 'pending',created_at TIMESTAMP,customer_id INT,FOREIGN KEY (customer_id) REFERENCES customer(id));

INSERT INTO categories(NAME,DESCRIPTION) VALUES ('sample demo','sample description');
SELECT * FROM categories;

ALTER TABLE orders MODIFY COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
INSERT INTO produts(NAME,price,stocks,category_id) VALUES ('samsung',15000,20,1),('redmi',10000,40,1),('Hero',120000,1000,2);
SELECT * FROM produts;
INSERT INTO customer(NAME,email,phone) VALUES ('siva','siva@mail.com','9384408622'),('arun','arun@mail.com','9876553211');
INSERT INTO orders(total_amount,customer_id) VALUES (1200,2);
SELECT * FROM customer;
SELECT * FROM orders;
-- group by
SELECT category_id,COUNT(*) FROM produts GROUP BY category_id;

DELETE c FROM categories c LEFT JOIN produts p ON c.id = p.category_id WHERE p.id IS null;

SELECT c.id,c.name FROM produts c LEFT JOIN orders p ON c.id = p.customer_id WHERE p.id IS NULL ;

SELECT c.id,c.name,COUNT(p.id) FROM customer c left JOIN orders p ON c.id=p.customer_id GROUP BY c.id,c.name having c.id=2;

SELECT c.id,c.name,COUNT(p.id) FROM customer c left JOIN orders p ON c.id=p.customer_id GROUP BY c.id,c.name having COUNT(p.id)>0;

SELECT * FROM orders WHERE customer_id=2;

SELECT * FROM orders WHERE STATUS="pending" AND DATE_ADD(NOW(),INTERVAL -7 DAY);

SELECT NOW();

SELECT DATE_ADD(NOW(),INTERVAL -7 DAY);

SELECT * FROM orders WHERE created_at BETWEEN DATE_ADD(NOW(),INTERVAL -2 DAY) and DATE_ADD(NOW(),INTERVAL 2 DAY);

SELECT id,customer_id,COUNT(id) AS b FROM orders GROUP BY customer_id HAVING COUNT(id)>0 AND DATE_ADD(NOW(),INTERVAL -30 DAY);

UPDATE orders SET STATUS="cancelled" WHERE id=1;