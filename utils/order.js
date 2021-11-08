const { Orders, OrderInfo } = require("../models/order");
const Users = require("../models/user");
const { Products } = require("../models/products");


const allOrders = async () => await Orders.findAll({});

const addOrder = async (order) => {
    const user = await Users.findOne({where: {email: order.customer.email}});
    await Orders.create({UserId: user.id});
    const theOrder = await Orders.findOne({where: {UserId: user.id}, order: [["createdAt", "DESC"]]});
    const items = order.order;
    for (let item of items) {
        await OrderInfo.create({OrderId: theOrder.id, ProductId: item.productId});
    }
};

const userOrder = async (email) => {
    const user = await Users.findOne({where: {email: email}});
    const orders = await Orders.findAll({raw: true, where: {UserId: user.id}})
    let orderIds = [];

    for (let i = 0; i < orders.length; i++) {
        orderIds.push(orders[i].id);
    };

    const products = await OrderInfo.findAll({raw: true, where: {orderId: orderIds}});
    let productIds = [];

    for (let i = 0; i < products.length; i++) {
        productIds.push(products[i].ProductId);
    };
    
    const productInfo = await Products.findAll({raw: true, where: {Id: productIds}});
    return productInfo;
} 


module.exports = {
    allOrders,
    addOrder,
    userOrder
};