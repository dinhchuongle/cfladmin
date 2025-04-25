const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Admin Dashboard (protected)");
});

module.exports = router;
