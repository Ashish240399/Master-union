const mongoose = require("mongoose");
const dashboardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  paid: false,
});
const Dashboard = mongoose.model("dashboard", dashboardSchema);
module.exports = Dashboard;
