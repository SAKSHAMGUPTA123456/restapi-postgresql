// db.js
const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Supabase usually requires SSL
  },
});

module.exports = pool;
