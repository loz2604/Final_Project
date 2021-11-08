const { DataTypes } = require("sequelize");
const connection = require("../connection");
const User = require("./user");
const { Products } = require("./products");
const { Basket } = require("./savedbasket");

const Orders = connection.define("Order", {
}
);

const OrderInfo = connection.define("OrderInfo", { 
}
);

OrderInfo.belongsTo(Orders, { onDelete: "cascade" });
Orders.belongsTo(User, { onDelete: "cascade" });
OrderInfo.belongsTo(Products, { onDelete: "cascade" });
Basket.belongsTo(Products, { onDelete: "cascade" });
Basket.belongsTo(User, { onDelete: "cascade" });

module.exports = { Orders, OrderInfo }