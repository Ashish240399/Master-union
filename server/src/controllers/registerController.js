const express = require("express");
const Register = require("../models/registerModel");
const User = require("../models/userModel");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const registeredUser = req.body;
    const user = await Register.find({ email: registeredUser.email });
    if (user.length > 0) {
      return res.status(205).json("Email already registered");
    } else {
      const registering = await Register.create(registeredUser);
      return res.status(200).send(registering);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
module.exports = router;
