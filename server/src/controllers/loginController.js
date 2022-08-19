const express = require("express");
const Login = require("../models/loginModel");
const Register = require("../models/registerModel");
const User = require("../models/userModel");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const userLogin = await Login.create(req.body);
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
        return res.status(400).send("wrong password");
      }
    }
    if (loggedin == true) {
      const user = await User.find({ email: userLogin.email });
      console.log(user);
      if (user.length > 0) {
        return res.status(200).send(user);
      } else {
        return res.status(201).send("Add details");
      }
    } else {
      return res.status(404).send("Signup first");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;