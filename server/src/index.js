const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
app.use(express.json());
app.use(cors());
const userController = require("./controllers/userController");
const registeredUserController = require("./controllers/registerController");
const dashboardController = require("./controllers/dashboardController");
const loggedinUserController = require("./controllers/loginController");
app.use("/user", userController);
app.use("/register", registeredUserController);
app.use("/dashboard", dashboardController);
app.use("/login", loggedinUserController);
app.listen(5000, async () => {
  try {
    await connectDB();
    console.log("Connected to 5000");
  } catch (error) {
    console.log(error);
  }
});
module.exports = app;
