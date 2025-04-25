const express = require("express");
const router = express.Router();
const { classes } = require("../models/classes");

router.get("/", (req, res) => {
    res.render("class_list", { classes });
});

router.get("/new", (req, res) => {
    res.render("new_class");
});

router.post("/new", (req, res) => {
    const { name, startDate, durationWeeks, schedule, teacher, zoomLink, zaloGroup } = req.body;
    classes.push({ name, startDate, durationWeeks, schedule, teacher, zoomLink, zaloGroup });
    res.redirect("/class");
});

module.exports = router;
