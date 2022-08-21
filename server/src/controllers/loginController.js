const express = require("express");
const Login = require("../models/loginModel");
const Register = require("../models/registerModel");
const User = require("../models/userModel");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const userLogin = req.body;
    const userSignup = await Register.find().lean().exec();
    let loggedin = false;
    for (let i = 0; i < userSignup.length; i++) {
      if (
        userSignup[i].email == userLogin.email &&
        userSignup[i].password == userLogin.password
      ) {
        loggedin = true;
        break;
      } else if (
        userSignup[i].email == userLogin.email &&
        userSignup[i].password != userLogin.password
      ) {
        return res.status(410).send({ message: "wrong password" });
      }
    }
    if (loggedin == true) {
      const user = await User.find({ email: userLogin.email });
      console.log(user);
      if (user.length > 0) {
        const loginUser = await Login.create(userLogin);
        return res.status(200).send({ user: user });
      } else {
        return res.status(201).send({ message: "Add details" });
      }
    } else {
      return res.status(392).send({ message: "Signup first" });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.delete("/:email", async (req, res) => {
  try {
    const user = await Login.deleteOne({ email: req.params.email });
    return res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    return res.send({ message: "error deleting user" });
  }
});
module.exports = router;
