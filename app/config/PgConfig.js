const { Pool, Client } = require('pg');
const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	password: process.env.PGPASSWORD,
	database: process.env.PGDATABASE,
	port: process.env.PGPORT,
});

module.exports.database = pool;
