const router = require("express").Router();
const { createDB, getAll } = require("../utils/admin");

router.post("/", async (req, res) => {
    res.status(201).json({msg: "Added database", data: await createDB(req.body.products)})
});

router.get("/", async (req, res) => {
    res.status(200).json({msg: "the data", data: await getAll()});
});

module.exports = router;