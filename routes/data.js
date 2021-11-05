const router = require("express").Router();
const { getProducts, getAllAction, getAllAdventure, getAllStrategy, getAllPuzzle, getAllPC, getAllPlaystation, getAllSwitch } = require("../utils/data")


router.get("/", async (req, res) => {
    res.status(200).json({msg: "heres the data", data: await getProducts()})
});

router.get("/adventure", async (req, res) => {
    res.status(200).json({msg: "Adventure games", data: await getAllAdventure()})
});

router.get("/strategy", async (req, res) => {
    res.status(200).json({msg: "Strategy games", data: await getAllStrategy()})
});

router.get("/puzzle", async (req, res) => {
    res.status(200).json({msg: "Puzzle games", data: await getAllPuzzle()})
});

router.get("/action", async (req, res) => {
    res.status(200).json({msg: "Action games", data: await getAllAction()})
});

router.get("/playstation", async (req, res) => {
    res.status(200).json({msg: "Playstation games", data: await getAllPlaystation()})
});

router.get("/switch", async (req, res) => {
    res.status(200).json({msg: "Nintendo Switch games", data: await getAllSwitch()})
});

router.get("/pc", async (req, res) => {
    res.status(200).json({msg: "PC games", data: await getAllPC()})
});

module.exports = router;