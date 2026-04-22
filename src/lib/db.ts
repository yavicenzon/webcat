
import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { products as initialProducts } from '../data/products';

const dbPath = path.resolve('./cat-market.db');
const db = new Database(dbPath);

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE,
    email TEXT UNIQUE,
    phone TEXT,
    password TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    expires_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT,
    price INTEGER,
    originalPrice INTEGER,
    discount INTEGER,
    image TEXT,
    category TEXT,
    rating REAL,
    sold INTEGER,
    location TEXT,
    isAd BOOLEAN DEFAULT 0,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed logic
const userCount = db.prepare('SELECT count(*) as count FROM users').get() as { count: number };
if (userCount.count === 0) {
    console.log('Seeding default user...');
    db.prepare(`
        INSERT INTO users (id, username, email, password)
        VALUES (?, ?, ?, ?)
    `).run('user-1', 'admin', 'admin@catmarket.com', 'password123');
}

const productCount = db.prepare('SELECT count(*) as count FROM products').get() as { count: number };
if (productCount.count === 0) {
    console.log('Seeding products...');
    const insertProduct = db.prepare(`
        INSERT INTO products (id, name, price, originalPrice, discount, image, category, rating, sold, location, isAd, description)
        VALUES (@id, @name, @price, @originalPrice, @discount, @image, @category, @rating, @sold, @location, @isAd, @description)
    `);

    // Insert initial hardcoded products
    for (const p of initialProducts) {
        insertProduct.run({
            ...p,
            originalPrice: p.originalPrice || null,
            discount: p.discount || null,
            isAd: p.isAd ? 1 : 0,
            description: `Deskripsi untuk ${p.name}. Produk berkualitas untuk anabul kesayangan Anda.`
        });
    }

    // Scan for new images and add them as products
    try {
        const publicDir = path.resolve('./public/products');
        if (fs.existsSync(publicDir)) {
            const files = fs.readdirSync(publicDir);
            const existingImages = new Set(initialProducts.map(p => p.image.replace('/products/', '')));

            let newId = initialProducts.length + 1;

            for (const file of files) {
                if (!existingImages.has(file) && /\.(jpg|jpeg|png|webp)$/i.test(file)) {
                    // Generate mock product data from filename
                    const name = file.split('.')[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                    const price = Math.floor(Math.random() * (500000 - 15000) + 15000);
                    const category = ['Makanan Kucing', 'Mainan Kucing', 'Peralatan', 'Aksesori'].sort(() => 0.5 - Math.random())[0];

                    insertProduct.run({
                        id: String(newId++),
                        name: name,
                        price: price,
                        originalPrice: null,
                        discount: null,
                        image: `/products/${file}`,
                        category: category,
                        rating: (4 + Math.random()).toFixed(1),
                        sold: Math.floor(Math.random() * 100),
                        location: 'Jakarta',
                        isAd: 0,
                        description: `Produk baru kami! ${name} sangat cocok untuk kucing anda.`
                    });
                }
            }
        }
    } catch (e) {
        console.error("Failed to list product images:", e);
    }
}

export default db;
