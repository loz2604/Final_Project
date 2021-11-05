const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Products = connection.define("Product", {
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    platform: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    trailerUrl: {
        type: DataTypes.STRING
    },
    APIID: {
        type: DataTypes.INTEGER
    }
});

module.exports = { Products };