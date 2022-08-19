const mongoose = require("mongoose");
const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://assignment:assignment@cluster0.jxesayy.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connectDB;
