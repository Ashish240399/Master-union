const express = require("express");
const Dashboard = require("../models/dashboardModel");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const data = await Dashboard.create(req.body);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Dashboard.find()
      .populate({ path: "userId" })
      .lean()
      .exec();
    return res.status(200).send({ data: data });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
router.post("/:userId", async (req, res) => {
  try {
    const data = await Dashboard.updateOne(
      { userId: req.params.userId },
      { $set: { paid: true } }
    );
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
router.get("/:userId", async (req, res) => {
  try {
    const data = await Dashboard.find({ userId: req.params.userId })
      .populate({ path: "userId" })
      .lean()
      .exec();
    return res.status(200).send({ data: data });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
module.exports = router;
