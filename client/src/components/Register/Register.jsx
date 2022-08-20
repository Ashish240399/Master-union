import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
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
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      if (response.status == 205) {
        alert("Email already registered");
      } else if (response.status == 200) {
        alert("Registered successfully");
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register Form</h2>
        <div className="label">Email</div>
        <input id="email" onChange={handleChange} type="text" />
        <div className="label">Password</div>
        <input id="password" onChange={handleChange} type="password" />
        <button>Submit</button>
      </form>
      <Link to="/login">
        <p>email already exists..Login</p>
      </Link>
    </div>
  );
};

export default Register;
