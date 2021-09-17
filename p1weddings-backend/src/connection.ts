import { appendFile } from "fs";
import { Client } from "pg";

require('dotenv').config({ path: 'C:\\Users\\vhpho\\OneDrive\\Revature\\Training\\p1weddings-backend\\app.env' })


export const conn = new Client({
    
    user: process.env.DATABASEUSER,
    database: process.env.DATABASENAME,
    password: process.env.DATABASEPASSWORD,
    port: 5432,
    host: '35.188.247.118'
});

conn.connect();


