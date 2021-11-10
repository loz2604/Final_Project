const { Orders, OrderInfo } = require("../models/order");
const Users = require("../models/user");
const { Products } = require("../models/products");


const allOrders = async () => await Orders.findAll({});

const addOrder = async (order) => {
    const user = await Users.findOne({ where: { email: order.customer.email } });
    await Orders.create({ UserId: user.id });
    const theOrder = await Orders.findOne({ where: { UserId: user.id }, order: [["createdAt", "DESC"]] });
    const items = order.order;
    console.log(items);
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

    const products = await OrderInfo.findAll({ raw: true, where: { orderId: orderIds } });
    console.log(products);
    let productIdsQtys = [];
    let productIds = [];
    let quantities = [];

    for (let i = 0; i < products.length; i++) {
        productIdsQtys.push({"ProductId": products[i].ProductId, "quantity": products[i].quantity});
        productIds.push(products[i].ProductId);
        quantities.push(products[i].quantity);
    };

    const productInfo = await Products.findAll({ raw: true, where: { Id: productIds } });

    
    for (let i = 0; i < productInfo.length; i++) {
        productInfo[i] = {...productInfo[i], "qty": quantities[i]};
    };
    return productInfo;
};


module.exports = {
    allOrders,
    addOrder,
    userOrder
};