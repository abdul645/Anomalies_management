import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2';

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'my-db-instance.czusqmmmimph.ap-south-1.rds.amazonaws.com',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Abdulazeem1234',
    database: process.env.DB_NAME || 'FormDB',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 20000, // Increase timeout to 10 seconds
});

export default pool.promise();

