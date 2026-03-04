// routes/tests.js
const express = require("express");
const router = express.Router();

const users = require("../data/users");
const { verifyToken } = require("../utils/auth");

router.get("/", (req, res) => {
    console.log(req.body);
    console.log("Received request for tests");

    const tests = require("../data/tests.json");


    res.json(tests);
});

module.exports = router;