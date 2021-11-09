const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Basket = connection.define("SavedBasket", {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}
);
module.exports = { Basket };