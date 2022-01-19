var express = require("express");
var router = express.Router();

/* GET Home Page. */
router.get("/", function (req, res, next) {
  res.json({ message: "Welcome to Application" });
});

module.exports = router;
