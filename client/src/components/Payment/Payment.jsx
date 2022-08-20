import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const userId = useSelector((store) => store.user.user);
  const [paymentDone, setPaymentDone] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    check();
  }, []);
  async function check() {
    const data = await fetch(
      `http://localhost:5000/dashboard/${userId[0]._id}`
    );
    const res = await data.json();
    setPaymentDone(res.data[0].paid);
  }
  console.log(paymentDone);
  const paynow = async () => {
    fetch(`http://localhost:5000/dashboard/${userId[0]._id}`, {
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
      {paymentDone === true ? (
        <button disabled>Paid Already</button>
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
  );
};

export default Payment;
