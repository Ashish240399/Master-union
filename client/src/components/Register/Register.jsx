import React from "react";
import { useState } from "react";

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
      console.log(response);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="email" onChange={handleChange} type="text" />
        <input id="password" onChange={handleChange} type="password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
