const express = require("express");
const Register = require("../models/registerModel");
const User = require("../models/userModel");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const registeredUser = await Register.create(req.body);
    const user = await User.find({ email: registeredUser.email });
    if (user.length > 0) {
      return res.sendStatus(205).send("Email already registered");
    }
    return res.status(200).send(registeredUser);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
module.exports = router;
