const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const Users = require("../models/user");

let storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

let upload = multer({ storage, limits: { fileSize: 1000000 * 100 } }).single(
  "file"
); //100mb

router.post("/", (req, res, next) => {
  // Store File
  upload(req, res, async (err) => {
    // Validate Request
    if (!req.file) {
      return res.json({ error: "Please upload a file" });
    }

    if (err) {
      return res.status(500).send({ error: err.message });
    }

    // Update user
    const file = req.file;
    // const user = await Users.find({ _id: req.body.userId });
    // const updatedUser = Users.save({
    //   ...user,
    //   audio: `${process.env.APP_BASE_URL}/${file.path}`,
    // });
    // res.json({ file: `${process.env.APP_BASE_URL}/${file.path}` });
    const updatedUser = await Users.updateOne(
      { _id: req.body.userId },
      { $set: { audio: `${process.env.APP_BASE_URL}/${file.path}` } }
    );
    res.json(updatedUser);
  });
});

module.exports = router;
