const router = require("express").Router();
const { saveBasket, getBasket } = require("../utils/basket");


router.post("/", async (req, res) => {
    res.status(201).json({msg: "Saved Basket", data: await saveBasket(req.body)})
});

router.put("/", async (req, res) => {
    res.status(200).json({ msg: "Deleted Basket", data: await getBasket(req.body)})
});



module.exports = router;
