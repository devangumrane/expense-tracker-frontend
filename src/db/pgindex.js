import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // or use user, host, db, pass, port separately
});

export default pool;
