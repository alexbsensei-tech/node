// routes/verify.js
const express = require("express");
const router = express.Router();

// Verify route - маршрут проверки
router.post("/", (req, res) => { // post request to /verify, receives token
  const { verifyToken } = require("../utils/auth");
  const { token } = req.body;
  const valid = verifyToken(token);
  res.json({ valid: !!valid, role: valid?.role });
});

module.exports = router;