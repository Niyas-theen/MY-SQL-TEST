E-commerce System Database
Overview
This project involves building a simple e-commerce system database using MySQL. The database contains three main tables: customers, orders, and products, with an additional order_items table to normalize the structure. The system stores information about customers, products, orders, and their relationships, allowing for operations like retrieving customer orders, updating product prices, and calculating statistics.

Table of Contents
Overview
Database Structure
Installation
Usage
Queries
Contributing
License
Database Structure
The database consists of the following tables:

Customers

id: Primary key, auto-incremented
name: Customer's name
email: Customer's email
address: Customer's address
Orders

id: Primary key, auto-incremented
customer_id: Foreign key referencing customers.id
order_date: Date the order was placed
total_amount: Total amount of the order
Products

id: Primary key, auto-incremented
name: Product name
price: Product price
description: Product description
Order Items (Normalized Table)

id: Primary key, auto-incremented
order_id: Foreign key referencing orders.id
product_id: Foreign key referencing products.id
quantity: Quantity of the product ordered
price: Price of the product at the time of the order
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/ecommerce-database.git
Set up the MySQL database:

Install MySQL if you haven't already.
Open your MySQL client (MySQL Workbench, command-line, etc.).
Execute the provided SQL script (ecommerce.sql) to create the database and insert the sample data.
Access the database:

Run MySQL:
bash
Copy code
mysql -u your-username -p
Use the ecommerce database:
sql
Copy code
USE ecommerce;
Usage
Once the database is set up, you can execute the provided SQL queries to perform operations such as retrieving customer orders, updating product prices, and calculating order statistics.

Sample SQL Queries
Here are some common queries you can use to interact with the database:

Retrieve all customers who placed an order in the last 30 days:

sql
Copy code
SELECT DISTINCT c.name
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.order_date >= CURDATE() - INTERVAL 30 DAY;
Get the total amount of all orders placed by each customer:

sql
Copy code
SELECT c.name, SUM(o.total_amount) AS total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.name;
Update the price of a specific product:

sql
Copy code
UPDATE products
SET price = 45.00
WHERE name = 'Indomie';
For more queries, check the queries.sql file in the repository.

Queries
Retrieve the top 3 products by price

sql
Copy code
SELECT name, price
FROM products
ORDER BY price DESC
LIMIT 3;
Join the orders and customers tables:

sql
Copy code
SELECT c.name, o.order_date
FROM customers c
JOIN orders o ON c.id = o.customer_id;
Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with any enhancements or fixes. You can also open an issue if you encounter any problems.
