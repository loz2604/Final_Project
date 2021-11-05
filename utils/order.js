const { Orders } = require("../models/order");

const allOrders = async () => await Orders.findAll({});
const addOrder = async (order) => await Orders.create(order);


module.exports = {
    allOrders,
    addOrder
}