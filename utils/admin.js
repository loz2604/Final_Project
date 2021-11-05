const { Products } = require("../models/products");

const createDB = async (products) => {
    for (let product of products) {
        await Products.create(product)
    }
    // for (let i = 0; i< products.length; i++){
    //     await Products.create(products[i]);
    // }
}
// const getAll = async () => {
//     return await Products.findAll({})
// }

module.exports = {
    createDB 
};