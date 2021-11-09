const { Basket } = require("../models/savedbasket");
const User = require("../models/user");


const saveBasket = async (body) => {
    const user = await User.findOne({where: {email: body.customer.email}});
    for (let i = 0; i < body.order.length; i++) {
        await Basket.create({UserId: user.id, ProductId: body.order[i].productId, quantity: body.oder[i].quantity});
    }
};

const getBasket = async (body) => {
    const user = await User.findOne({where: {email: body.email}});
    const savedItems = await Basket.findAll({raw: true, where: {UserId: user.id}});
    let productIds = [];
    for (let i = 0; i < savedItems.length; i++) {
        productIds.push(savedItems[i].ProductId)
    };
    await Basket.destroy({where: {UserId: user.id}});
    return productIds;
};

module.exports = { saveBasket, getBasket }

