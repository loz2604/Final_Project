const { Orders, OrderInfo } = require("../models/order");
const Users = require("../models/user");
const { Products } = require("../models/products");


const allOrders = async () => await Orders.findAll({});

const addOrder = async (order) => {
    const user = await Users.findOne({ where: { email: order.customer.email } });
    await Orders.create({ UserId: user.id });
    const theOrder = await Orders.findOne({ where: { UserId: user.id }, order: [["createdAt", "DESC"]] });
    const items = order.order;
    for (let item of items) {
        await OrderInfo.create({ OrderId: theOrder.id, ProductId: item.productId, quantity: item.quantity });
    }
};

const userOrder = async (email) => {
    const user = await Users.findOne({ where: { email: email } });
    const orders = await Orders.findAll({ raw: true, where: { UserId: user.id } });
    let orderIds = [];
    for (let i = 0; i < orders.length; i++) {
        orderIds.push(orders[i].id);
    };

    const products = await OrderInfo.findAll({ raw: true, where: { OrderId: orderIds } });
    // here is the issue doestn recognise OrderId, need to change name
    let productIdsQtys = [];

    for (let i = 0; i < products.length; i++) {
        productIdsQtys.push({"ProductId": products[i].ProductId, "quantity": products[i].quantity});
    };

    let basket = [];

    for (let i = 0; i < productIdsQtys.length; i++) {
        let temp = await Products.findOne({raw: true, where: {id: productIdsQtys[i].ProductId}});
        basket[i] = {...temp, "qty": productIdsQtys[i].quantity}
    };
    return basket;
};


module.exports = {
    allOrders,
    addOrder,
    userOrder
};