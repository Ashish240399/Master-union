import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../../Redux/actions/userAction";

const AddDetails = () => {
  const navigate = useNavigate();
  const logged_email = JSON.parse(localStorage.getItem("email"));
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: logged_email,
    roll_no: "",
    mobile_no: "",
  });
  console.log(logged_email);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (logged_email !== null) {
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then(async () => {
          const data = await fetch(`http://localhost:5000/user/${form.email}`);
          const res = await data.json();
          dispatch(user(res[0]));
          alert("Details added successfully");
          console.log(res[0]._id);
          fetch(`http://localhost:5000/dashboard`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ userId: res[0]._id, paid: false }),
          });
        })
        .then(() => {
          navigate("/");
        });
    } else {
      alert("Log in first");
    }
  };
  return (
    <div>
      <form style={{ marginTop: "60px" }} onSubmit={handleSubmit}>
        <h2>Student Details</h2>
        <div className="label">First Name</div>
        <input onChange={handleChange} id="first_name" type="text" />
        <div className="label">Last Name</div>
        <input onChange={handleChange} id="last_name" type="text" />
        <div className="label">Roll Number</div>
        <input onChange={handleChange} id="roll_no" type="text" />
        <div className="label">Mobile Number</div>
        <input onChange={handleChange} id="mobile_no" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddDetails;
