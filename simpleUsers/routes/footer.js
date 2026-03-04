// routes/footer.js - Route for fetching footer items - Маршрут для получения элементов подвала
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const footer = require("../data/footer.json");
    res.json(footer);
});

module.exports = router;