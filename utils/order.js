const Order = require("../models/order");

const allOrders = async () => await Order.findAll({});
const addOrder = async (order) => await Order.create(order);


module.exports = {
    allOrders,
    addOrder
}