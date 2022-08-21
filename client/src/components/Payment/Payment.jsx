import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "./Payment-Options/Card";
import Netbanking from "./Payment-Options/Netbanking";
import Upi from "./Payment-Options/Upi";
import "./Payment.css";
const Payment = () => {
  const userId = useSelector((store) => store.user.user);
  const [paymentDone, setPaymentDone] = useState();
  const [options, setOptions] = useState("card");
  const navigate = useNavigate();
  useEffect(() => {
    if (userId !== undefined) {
      check();
    }
  }, [userId]);
  async function check() {
    const data = await fetch(`http://localhost:5000/dashboard/${userId._id}`);
    const res = await data.json();
    setPaymentDone(res.data[0].paid);
  }
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
            <div>
              <h2>Total Amount: Rs. 2343</h2>
              <div className="payment-selection">
                <p>Choose One Method To Pay Fees</p>
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "white",
                    color: "black",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    className="option"
                    id={`${options == "card" && "active"}`}
                    onClick={() => setOptions("card")}
                  >
                    Card
                  </div>
                  <div
                    className="option"
                    id={`${options == "net" && "active"}`}
                    onClick={() => setOptions("net")}
                  >
                    Net banking
                  </div>
                  <div
                    className="option"
                    id={`${options == "upi" && "active"}`}
                    onClick={() => setOptions("upi")}
                  >
                    UPI
                  </div>
                </div>
                <div className="selected">
                  {options == "card" ? (
                    <Card />
                  ) : options == "net" ? (
                    <Netbanking />
                  ) : (
                    options == "upi" && <Upi />
                  )}
                </div>
                <button
                  style={{
                    padding: "10px 40px",
                    backgroundColor: "white",
                    border: "none",
                  }}
                  onClick={() => {
                    paynow();
                  }}
                >
                  Pay now
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Payment;
