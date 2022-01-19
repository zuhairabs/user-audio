const express = require("express");
const router = express.Router();
const Users = require("../models/user");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await Users.find({});
  res.json(users);
});

// GET Individual User
router.get("/:id", async function (req, res, next) {
  const id = req.params.id;
  const user = await Users.find({ _id: id });
  res.json(user);
});

module.exports = router;
