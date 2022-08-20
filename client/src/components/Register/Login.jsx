import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../../Redux/actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (response) => {
      const data = await response.json();
      if (data.message == "wrong password") {
        alert("Invalid email or password");
      } else if (data.message == "Signup first") {
        alert("Email doesn't exist");
      } else if (data.message == "Add details") {
        alert("Logged in successfully.. Please add details");
        localStorage.setItem("email", JSON.stringify(form.email));
        navigate("/");
      } else if (data.user) {
        localStorage.setItem("email", JSON.stringify(form.email));
        dispatch(user(data.user));
        alert("User logged in successfully");
        navigate("/");
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="email" onChange={handleChange} type="email" />
        <input id="password" onChange={handleChange} type="password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
