# SQL = Structured Query Language

It's not a programming language rather it's more like a declarative language. We don't tell it to do something step by step; rather we tell it the results we want. The database engine figures out the fastest way to do it. 

## It is a realtional model because:

1. The central idea is "why".
2. Organises data into tables (also called relations).
3. Has a fixed set of *columns (fields)*, each with a declared data type.
4. Holds any number of *rows (records)*, each one being one real thing.

## Keys

1. **Primary:** A column or combo of columns that uniquely identifies each row.
2. **Foreign:** A column in one table that points to the primary key of anoter table.

*This matters because it's what makes SQL fundamentally different from a spreadsheet or CSV: instead of duplicating a product's full details in every row that references it, you store it once and reference it. That eliminates duplication and inconsistency (imagine updating a price in 40 different CSV rows manually vs. one row in products).*

## The four "categories" of SQL commands

1. **DDL (Definition): CREATE, ALTER, DROP** define the structure -- tables, columns, types.
2. **DML (Manipulation):** **INSERT, UPDATE, DELETE** chamge the data inside the table.
3. **DQL (Query): SELECT** reads/ retreives data.
4. **DCL/TCL (Control): GRANT, COMMIT and SELECT** are used for permissions and multi-step atomic operations.

## Commonly used data types:

1. **INTEGER/SERIAL :** Whole numbers/ SERIAL -> Auto incrementing integer in Postgres.
2. **TEXT :** Unlimited length.
3. **VARCHAR(n) :** Capped at n characters.
4. **NUMERIC(p,s) :** Exact decimal numbers, critical for money (p = total digits, s = digits after the decimal point).
5. **BOOLEAN :** True/False.
6. **TIMESTAMP :** date+time.

## Creating Table:

CREATE TABLE table_name (

    column definitions

);

## Inserting Data to Table

### Single Row
INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);

### Multi Row
INSERT INTO table_name (col1, col2) VALUES
  (val1, val2),
  (val1, val2),
  (val1, val2);

**SELECT * FROM TABLE_NAME;** -> Selects all tables.
**SELECT OMUK, TOMUK, SHAMUK FROM TABLE_NAME;** -> Selects the selected columsn
**SELECT columns FROM table_name ORDER BY column_name;** -> By default, this sorts ascending (smallest → largest for numbers, A→Z for text). To reverse it, add DESC (descending) at the end.

## Updating Data
**UPDATE** table_name
**SET** column1 = value1
**WHERE** condition;

## Deleting Data

**DELETE FROM** table_name **WHERE** condition;
*Run the SELECT with the same WHERE first to confirm exactly what you're about to delete.*

## Reading Practice: 

**SELECT model, price_tk FROM products WHERE stock_qty > 0 ORDER BY price_tk DESC;**
Is read as "give me model and price for anything in stock, most expensive first."

