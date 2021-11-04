const { DataTypes } = require("sequelize");
const connection = require("../connection");

module.exports = connection.define("Order",
    {
        name: DataTypes.STRING,
        allowNull: false
    },
    {
        price: DataTypes.STRING,
        allowNull: false
    }
);