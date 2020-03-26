const express = require("express");
const authRouter = express.Router();
const connection = require("../../helpers/db.js");

authRouter.post("/signup", (req, res, next) => {
  const { flash, open, ...newUser } = req.body;
  connection.query("INSERT INTO users SET ?", newUser, (err, results) => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: "User has been signed up!" });
  });
});
module.exports = {
  authRouter
};
