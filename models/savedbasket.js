const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Basket = connection.define("SavedBasket", {
}
);
module.exports = { Basket };