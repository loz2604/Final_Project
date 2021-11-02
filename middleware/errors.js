const registerError = (error, req, res, next) => {
    res.status(401).json({ msg: "Couldn't Create User", error })
};

module.exports = registerError;
