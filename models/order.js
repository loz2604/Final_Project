const { DataTypes } = require("sequelize");
const connection = require("../connection");
const User = require("./user");
const { Products } = require("./products");
const { Basket } = require("./savedbasket");

const Orders = connection.define("Order", {});

const OrderInfo = connection.define("OrderInfo", {
  quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

OrderInfo.belongsTo(Orders, { onDelete: "cascade" });
Orders.belongsTo(User, { onDelete: "cascade" });
OrderInfo.belongsTo(Products, { onDelete: "cascade" });
Basket.belongsTo(Products, { through: "Basketcase" });
Basket.belongsTo(User, { onDelete: "cascade" });
Products.belongsToMany(Basket, { through: "Basketcase" });

module.exports = { Orders, OrderInfo };
