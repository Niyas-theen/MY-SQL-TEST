// -- Create the database named ecommerce
// CREATE DATABASE ecommerce;
// USE ecommerce;

// -- Create customers table
// CREATE TABLE customers (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(50),
//     email VARCHAR(100),
//     address VARCHAR(100)
// );

// -- Create orders table with foreign key referencing customers.id
// CREATE TABLE orders (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     customer_id INT,
//     order_date DATE,
//     total_amount DECIMAL(10, 2),
//     FOREIGN KEY (customer_id) REFERENCES customers(id)
// );

// -- Create products table
// CREATE TABLE products (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(50),
//     price DECIMAL(10, 2),
//     description VARCHAR(255)
// );

// -- Insert sample data into customers table
// INSERT INTO customers (name, email, address) VALUES
// ('Niyas', 'niyas@example.com', 'Mangalam'),
// ('Sheik', 'sheik@example.com', 'Mangalam'),
// ('Samsu', 'samsu@example.com', 'Mangalam');

// -- Insert sample data into orders table
// INSERT INTO orders (customer_id, order_date, total_amount) VALUES
// (1, '2024-09-15', 120.00),
// (2, '2024-10-01', 200.00),
// (3, '2024-10-05', 350.00);

// -- Insert sample data into products table
// INSERT INTO products (name, price, description) VALUES
// ('Milk', 20.00, 'Fresh milk'),
// ('Biscuit', 15.00, 'Crispy biscuits'),
// ('Indomie', 30.00, 'Instant noodles');

// -- Get customers who placed orders in the last 30 days
// SELECT DISTINCT c.name
// FROM customers c
// JOIN orders o ON c.id = o.customer_id
// WHERE o.order_date >= CURDATE() - INTERVAL 30 DAY;

// -- Get total order amount for each customer
// SELECT c.name, SUM(o.total_amount) AS total_spent
// FROM customers c
// JOIN orders o ON c.id = o.customer_id
// GROUP BY c.name;

// -- Update price of product Indomie to 45.00
// UPDATE products
// SET price = 45.00
// WHERE name = 'Indomie';

// -- Add new column discount to products table
// ALTER TABLE products
// ADD COLUMN discount DECIMAL(5, 2) DEFAULT 0.00;

// -- Get the top 3 most expensive products
// SELECT name, price
// FROM products
// ORDER BY price DESC
// LIMIT 3;

// -- Get customers who have ordered 'Milk'
// SELECT DISTINCT c.name
// FROM customers c
// JOIN orders o ON c.id = o.customer_id
// JOIN order_items oi ON o.id = oi.order_id
// JOIN products p ON oi.product_id = p.id
// WHERE p.name = 'Milk';

// -- Retrieve customer name and order date for each order
// SELECT c.name, o.order_date
// FROM customers c
// JOIN orders o ON c.id = o.customer_id;

// -- Get orders where total amount is greater than 150
// SELECT * 
// FROM orders
// WHERE total_amount > 150.00;

// -- Create a table order_items to normalize the database
// CREATE TABLE order_items (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     order_id INT,
//     product_id INT,
//     quantity INT,
//     price DECIMAL(10, 2),
//     FOREIGN KEY (order_id) REFERENCES orders(id),
//     FOREIGN KEY (product_id) REFERENCES products(id)
// );

// -- Calculate average total of all orders
// SELECT AVG(total_amount) AS avg_order_total
// FROM orders;

// SELECT * FROM ecommerce






