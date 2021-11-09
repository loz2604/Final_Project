const router = require("express").Router();

router.post("/", async (req, res) => {
    res.status(201).json({msg: ""})
})

modules.exports = router;