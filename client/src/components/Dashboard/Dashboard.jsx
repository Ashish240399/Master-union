import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Dashboard.css";
const Dashboard = () => {
  const [list, setList] = useState();
  useEffect(() => {
    getList();
  }, []);
  async function getList() {
    const data = await fetch("http://localhost:5000/dashboard");
    const res = await data.json();
    setList(res.data);
  }
  console.log(list);
  return (
    <div className="dashboard-container">
      {list ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll no</th>
              <th>Email</th>
              <th>Phone no</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((el) => (
                <tr>
                  <td>
                    {el.userId.first_name + " "}
                    {el.userId.last_name}
                  </td>
                  <td>{el.userId.roll_no}</td>
                  <td>{el.userId.email}</td>
                  <td>{el.userId.mobile_no}</td>
                  <td>{el.paid == false ? "Not paid" : "paid"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <h2>Loading... Please wait</h2>
      )}
    </div>
  );
};

export default Dashboard;
