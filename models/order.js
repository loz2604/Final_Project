const { DataTypes } = require("sequelize");
const connection = require("../connection");
const User = require("./user");

const Orders = connection.define("Order", {
    TotalPrice: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
);

const OrderInfo = connection.define("OrderInfo", {
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}
);

OrderInfo.belongsTo(Orders, { onDelete: "cascade" });
Orders.belongsTo(User, { onDelete: "cascade" });

module.exports = { Orders, OrderInfo }