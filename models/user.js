const { DataTypes, STRING } = require("sequelize");
const connection = require("../connection");

module.exports = connection.define("User",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        indexes: [{ unique: true, fields: ["email"] }]
    }
);
