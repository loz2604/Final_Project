const User = require("../models/user");

const addName = async (email, name) => {
    return await User.update({ name: name }, { where: { email } });
};

module.exports = {
    addName
};