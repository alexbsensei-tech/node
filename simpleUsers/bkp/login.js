// routes/login.js
const express = require("express");
const router = express.Router();
const users = require("../data/users");

// Login route - маршрут входа в систему
router.post("/", (req, res) => { //  create endpoint for login
  const { username, password } = req.body; // get username and password from request body
  const { makeToken } = require("../utils/auth");
  const user = users[username];

  if (user && user.password === password) {
    const token = makeToken(username, user.role);
    return res.json({ success: true, token });
  }

  res.json({ success: false, message: "Invalid username or password" });
});

module.exports = router;