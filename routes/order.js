const router = require("express").Router();
const Order = require("../models/user");
const { allOrders, addOrder, deleteAllOrders, deleteOrder, editOrder, userOrder } = require("../utils/order");

router.get("/", async (req, res) => res.status(200).json({ msg: "All Orders", data: await allOrders() }));

router.put("/userorder", async (req, res) => res.status(200).json({msg: "User Order history", data: await userOrder(req.body)})) 
router.post("/", async (req, res) => res.status(201).json({ msg: "Add An Order", data: await addOrder(req.body) }));

module.exports = router;