const { Products } = require("../models/products");
const { Basket } = require("../models/savedbasket");
const User = require("../models/user");


const saveBasket = async (body) => {
    const user = await User.findOne({where: {email: body.customer.email}});
    for (let i = 0; i < body.order.length; i++) {
        await Basket.create({UserId: user.id, ProductId: body.order[i].productId, quantity: body.order[i].quantity});
    }
};

const getBasket = async (body) => {
    const user = await User.findOne({where: {email: body.email}});
    const savedItems = await Basket.findAll({raw: true, where: {UserId: user.id}});
    const products = await Products.findAll({raw: true, where: {id: savedItems.map((item) => item.ProductId)}});
    const quantities = savedItems.map((item) => item.quantity);
    for (let i = 0; i < products.length; i++) {
        products[i] = {...products[i], "qty": quantities[i]};
    };
    await Basket.destroy({where: {UserId: user.id}});
    return products;
};

const getABasket = async (userId) => {
    return await Basket.findAll({where: {UserId: userId}});
}; 

module.exports = { saveBasket, getBasket, getABasket }

