// routes/seacrafts.js
const express = require("express");
const router = express.Router();
const seacrafts = require("../data/seacrafts");

// Seacrafts route
// маршрут морских судов
router.get("/", (req, res) => {
  res.json(seacrafts);
});

module.exports = router;