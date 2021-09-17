"use strict";
exports.__esModule = true;
exports.conn = void 0;
var pg_1 = require("pg");
require('dotenv').config({ path: 'C:\\Users\\vhpho\\OneDrive\\Revature\\Training\\p1weddings-backend\\app.env' });
exports.conn = new pg_1.Client({
    user: process.env.DATABASEUSER,
    database: process.env.DATABASENAME,
    password: process.env.DATABASEPASSWORD,
    port: 5432,
    host: '35.188.247.118'
});
exports.conn.connect();
