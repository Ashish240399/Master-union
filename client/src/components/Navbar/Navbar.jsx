import React from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../../Redux/actions/userAction";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const Navbar = () => {
  const userLoggedin = JSON.parse(localStorage.getItem("email"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.user.user);
  useEffect(() => {
    getUserData();
  }, [userLoggedin]);

  async function getUserData() {
    const data = await fetch(`http://localhost:5000/user/${userLoggedin}`);
    const res = await data.json();
    console.log(res);
    dispatch(user(res[0]));
  }
  console.log("userDetails", userDetails);
  console.log(userLoggedin);
  return (
    <div className="Navbar">
      <div className="left">
        <Link to="/">Home</Link>
      </div>
      {userLoggedin == null ? (
        <div className="right">
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/student-details">Add Details</Link>
          </div>
          <PersonOutlineIcon />
        </div>
      ) : (
        <div
          className="right"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* {(userDetails.length !== undefined ||
            userDetails.first_name !== undefined) && (
            <div
              onClick={() => {
                localStorage.removeItem("email");
                dispatch(user({}));
                navigate("/");
              }}
            >
              Logout
            </div>
          )} */}

          <div>
            {userDetails !== undefined ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "500px",
                }}
              >
                <div
                  onClick={() => {
                    localStorage.removeItem("email");
                    dispatch(user({}));
                    navigate("/");
                  }}
                >
                  Logout
                </div>
                <div>
                  <Link to="payment">Pay Fees</Link>
                </div>
                <div>{userDetails.first_name}</div>
              </div>
            ) : Array.isArray(userDetails) == true ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "500px",
                }}
              >
                <div
                  onClick={() => {
                    localStorage.removeItem("email");
                    dispatch(user({}));
                    navigate("/");
                  }}
                >
                  Logout
                </div>
                <div>
                  <Link to="payment">Pay Fees</Link>
                </div>
                <div>{userDetails[0].first_name}</div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "500px",
                }}
              >
                <div
                  onClick={() => {
                    localStorage.removeItem("email");
                    dispatch(user({}));
                    navigate("/");
                  }}
                >
                  Logout
                </div>
                <div>
                  <Link to="/student-details">Add Details</Link>
                </div>
                <PersonOutlineIcon />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
