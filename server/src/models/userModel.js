const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  roll_no: { type: String, required: true, unique: true },
  mobile_no: { type: String, required: true },
});
const User = mongoose.model("users", userSchema);
module.exports = User;
