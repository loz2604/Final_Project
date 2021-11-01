const { Sequelize } = require("sequelize");

if (process.env.NODE_ENV === "production") {
    module.exports = new Sequelize(`${process.env.DATABASE_URL}?sslmode=require`, {
        url: process.env.DATABASE_URL,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            }
        }
    });
} else {
    module.exports = new Sequelize(
        process.env.SQL_DB_NAME,
        process.env.SQL_DB_USER,
        process.env.SQL_DB_PASSWORD,
        {
            host: process.env.SQL_DB_HOST,
            dialect: process.env.SQL_DB_DIALECT,
            logging: false
        }
    );
};
