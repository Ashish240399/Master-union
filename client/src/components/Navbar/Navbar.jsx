import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../../Redux/actions/userAction";
const Navbar = () => {
  const userLoggedin = JSON.parse(localStorage.getItem("email"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.user.user);
  useEffect(() => {}, [userDetails]);
  useEffect(() => {
    if (userDetails.first_name == undefined) {
      getUserData();
    }
  }, []);

  async function getUserData() {
    const data = await fetch(`http://localhost:5000/user/${userLoggedin}`);
    const res = await data.json();
    dispatch(user(res));
  }
  console.log("userDetails", userDetails);
  console.log(userLoggedin);
  return (
    <div>
      <Link to="/">Home</Link>
      {(userDetails.length > 0 || userDetails.first_name !== undefined) && (
        <p
          onClick={() => {
            localStorage.removeItem("email");
            dispatch(user({}));
            navigate("/");
          }}
        >
          Logout
        </p>
      )}
      {userLoggedin == null && (
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/student-details">Student Details</Link>
        </div>
      )}

      {userLoggedin == null ? (
        <div>Dummy</div>
      ) : (
        <div>
          <h2>
            {userDetails.length !== undefined
              ? userDetails[0].first_name
              : userDetails.first_name !== undefined && userDetails.first_name}
          </h2>
          <Link to="payment">Pay Fees</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
