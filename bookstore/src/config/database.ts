import { Pool } from 'pg';

const connectionString = '${{ Postgres.DATABASE_URL }}';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

export default pool;