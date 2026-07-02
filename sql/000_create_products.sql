CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    serial_id TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    model TEXT NOT NULL,
    brand TEXT,
    specifications TEXT,
    price_tk NUMERIC(10,2),
    price_usd NUMERIC(10,2),
    unit TEXT DEFAULT 'pc',
    stock_qty INTEGER NOT NULL DEFAULT 0,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);