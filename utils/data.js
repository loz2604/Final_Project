const { Products } = require("../models/products");

const getProducts = async () => {
    return await Products.findAll({});
};

const getAllPuzzle = async () => {
    return await Products.findAll({ where: { genre: "puzzle"}})
};
const getAllStrategy = async () => {
    return await Products.findAll({ where: {genre: "strategy"}})
};
const getAllAdventure = async () => {
    return await Products.findAll({where: {genre: "adventure"}})
};
const getAllAction = async () => {
    return await Products.findAll({where: {genre: "action"}})
};

const getAllSwitch = async () => {
    return await Products.findAll({where: {platform: "Nintendo Switch"}})
};

const getAllPlaystation= async () => {
    return await Products.findAll({where: {platform: "PlayStation"}})
};
const getAllPC = async () => {
    return await Products.findAll({where: {platform: "PC"}})
};

module.exports = {
    getProducts,
    getAllAdventure,
    getAllPuzzle,
    getAllStrategy,
    getAllAction,
    getAllSwitch,
    getAllPlaystation,
    getAllPC
};
