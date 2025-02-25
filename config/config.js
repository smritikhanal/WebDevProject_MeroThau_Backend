const { Sequelize } = require("sequelize");

// Initialize Sequelize with database credentials
const sequelize = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "admin123",
    database: process.env.DB_NAME || "merothau",
    logging:false
});



module.exports = { sequelize };
