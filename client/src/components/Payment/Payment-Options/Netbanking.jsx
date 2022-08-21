import { TextField } from "@mui/material";
import React from "react";

const Netbanking = () => {
  return (
    <div>
      <p>Mobile Banking</p>
      <div>
        <TextField
          style={{
            width: "100%",
            marginBottom: "30px",
          }}
          id="outlined-search"
          label="Bank Name"
          type="search"
        />
        <TextField
          style={{
            width: "100%",
            marginBottom: "30px",
          }}
          id="outlined-search"
          label="User Name"
          type="search"
        />
        <TextField
          style={{
            width: "100%",
            marginBottom: "30px",
          }}
          id="outlined-password-input"
          label="Password"
          type="password"
        />
      </div>
    </div>
  );
};

export default Netbanking;
