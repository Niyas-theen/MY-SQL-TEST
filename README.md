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
<bash>git clone https://github.com/your-username/ecommerce-database.git
</bash>

