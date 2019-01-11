require('dotenv').config();
// General configs and constants
module.exports = {
    SECRET: process.env.SECRET,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: process.env.DB_DIALECT
}