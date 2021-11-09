const { addOrder } = require("../utils/order");

const router = require("express").Router();

router.post("/", async (req, res) => {
    res.status(201).json({ msg: "Purchase Made", data: await addOrder(req.body) })
});

module.exports = router;