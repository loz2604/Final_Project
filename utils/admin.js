const { Products } = require("../models/products");

const createDB = async (products) => {
    for (let product of products) {
        await Products.create(product)
    }
};

const getAll = async () => {
   return await Products.findAll({})
}

const deleteAll = async () => {
    await Products.destroy({where: {}})
}

module.exports = {
    createDB,
    deleteAll,
    getAll
};