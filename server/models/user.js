const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    balance: { type: String, required: true },
    picture: { type: Number, required: true },
    age: { type: Number, required: true },
    name: { type: String, required: false },
    gender: { type: String, required: false },
    company: { type: String, required: false },
    email: { type: String, required: false },
    audio: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
