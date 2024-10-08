<h1>E-commerce System Database</h1>
<h2>Overview</h2>
<P>This project involves building a simple e-commerce system database using MySQL. The database contains three main tables: customers, orders, and products, with an additional order_items table to normalize the structure. The system stores information about customers, products, orders, and their relationships, allowing for operations like retrieving customer orders, updating product prices, and calculating statistics.</P>

<h3>Table of Contents</h3>
<ul>
  <li>Overview</li>
  <li>Database Structure</li>
  <li>Installation</li>
  <li>Usage</li>
  <li>Queries</li>
  <li>Contributing</li>
  <li>License</li>
</ul>

<h2>Database Structure</h2>
<p>The database consists of the following tables:</p>

<h3>1. Customers</h3>
<ul>
  <li>id: Primary key, auto-incremented</li>
  <li>customer_id: Foreign key referencing customers.id</li>
  <li>order_date: Date the order was placed</li>
  <li>total_amount: Total amount of the order</li>
</ul>

<h3>2. Orders</h3>
<ul>
  <li>id: Primary key, auto-incremented</li>
  <li>customer_id: Foreign key referencing customers.id</li>
  <li>order_date: Date the order was placed</li>
  <li>total_amount: Total amount of the order</li>
</ul>

<h3>3. Products</h3>
<ul>
  <li>id: Primary key, auto-incremented</li>
  <li>name: Product name</li>
  <li>price: Product price</li>
  <li>description: Product description</li>
</ul>

<h3>4. Order Items (Normalized Table)</h3>
<ul>
  <li>id: Primary key, auto-incremented</li>
  <li>order_id: Foreign key referencing orders.id</li>
  <li>product_id: Foreign key referencing products.id</li>
  <li>quantity: Quantity of the product ordered</li>
  <li>price: Price of the product at the time of the order</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Clone the repository:</li>
</ol>
git clone https://github.com/your-username/ecommerce-database.git

<ol>
  <li>Set up the MySQL database:</li>
</ol>
<ul>
  <li>Install MySQL if you haven't already.</li>
  <li>Open your MySQL client (MySQL Workbench, command-line, etc.).</li>
  <li>Execute the provided SQL script (ecommerce.sql) to create the database and insert the sample data.</li>
</ul>

<ol>
  <li>Access the database:</li>
</ol>
mysql -u your-username -p
USE ecommerce;

<h2>Usage</h2>
<p>Once the database is set up, you can execute the provided SQL queries to perform operations such as retrieving customer orders, updating product prices, and calculating order statistics.</p>

<h3>Sample SQL Queries</h3>
<p>Here are some common queries you can use to interact with the database:</p>

<ol>
  <li>Retrieve all customers who placed an order in the last 30 days:</li>
</ol>
SELECT DISTINCT c.name
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.order_date >= CURDATE() - INTERVAL 30 DAY;

<ol>
  <li>Get the total amount of all orders placed by each customer:</li>
</ol>
SELECT c.name, SUM(o.total_amount) AS total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.name;

<ol>
  <li>Update the price of a specific product:</li>
</ol>
UPDATE products
SET price = 45.00
WHERE name = 'Indomie';

<P>For more queries, check the queries.sql file in the repository.</P>

<h2>Queries</h2>

<ul>
  <li>Retrieve the top 3 products by price</li>
</ul>
SELECT name, price
FROM products
ORDER BY price DESC
LIMIT 3;

<ul>
  <li>Join the orders and customers tables:</li>
</ul>
<code>
  SELECT c.name, o.order_date
FROM customers c
JOIN orders o ON c.id = o.customer_id;
</code>
<h2>Contributing</h2>
<p>If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with any enhancements or fixes. You can also open an issue if you encounter any problems.</p>







