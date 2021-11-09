const router = require("express").Router();
const { createDB, getAll, deleteAll } = require("../utils/admin");

router.post("/", async (req, res) => {
    res.status(201).json({msg: "Added Database", data: await createDB(req.body.products)})
});

router.get("/", async (req, res) => {
    res.status(200).json({msg: "The Database", data: await getAll()})
});

router.delete("/", async (req, res) => {
    res.status(200).json({msg: "Deleted Database", data: await deleteAll()});
});

module.exports = router;