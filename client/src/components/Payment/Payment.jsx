import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const userId = useSelector((store) => store.user.user);
  const [paymentDone, setPaymentDone] = useState();
  const navigate = useNavigate();
  console.log(userId);
  useEffect(() => {
    if (userId) {
      check();
    }
  }, []);
  async function check() {
    const data = await fetch(`http://localhost:5000/dashboard/${userId._id}`);
    const res = await data.json();
    console.log(res);
    setPaymentDone(res.data[0].paid);
  }
  console.log(paymentDone);
  const paynow = async () => {
    fetch(`http://localhost:5000/dashboard/${userId._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      alert("Payment done successfully");
      navigate("/");
    });
  };

  return (
    <div>
      {paymentDone == undefined ? (
        <h2>Please wait...</h2>
      ) : (
        <div>
          {paymentDone === true ? (
            <div>
              <h2>You have already paid the fee...</h2>
              <p>Keep learning</p>
            </div>
          ) : (
            <button
              onClick={() => {
                paynow();
              }}
            >
              Pay
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Payment;
