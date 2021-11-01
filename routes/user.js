const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

const session = { session: false };

router.get("/", (req, res) => {
    res.status(200).json({ msg: "Worked" });
});

module.exports = router;