const express = require("express");
const User = require("../models/userModel");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
router.get("/:email", async (req, res) => {
  try {
    const user = await User.find({ email: req.params.email });
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
module.exports = router;
