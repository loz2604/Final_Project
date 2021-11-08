const { Orders, OrderInfo } = require("../models/order");
const Users = require("../models/user");


const allOrders = async () => await Orders.findAll({});
const addOrder = async (order) => {
    const user = await Users.findOne({where: {email: order.customer.email}});
    await Orders.create({UserId: user.id});
    const theOrder = await Orders.findOne({where: {UserId: user.id}, order: [["createdAt", "DESC"]]});
    const items = order.order;
    for (let item of items) {
        console.log(item.productId)
        await OrderInfo.create({OrderId: theOrder.id, ProductId: item.productId});
        // close to working having sql issue, rebuild databases and retest
    }
};
const userOrder = async (user) => {
    console.log(user);
} 

module.exports = {
    allOrders,
    addOrder,
    userOrder
};