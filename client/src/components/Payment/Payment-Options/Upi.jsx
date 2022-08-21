import { TextField } from "@mui/material";
import React from "react";
import MultipleSelectUpi from "./upiOption";

const Upi = () => {
  return (
    <div>
      <p>Pay using wallet</p>
      <MultipleSelectUpi />
      <TextField
        style={{
          width: "100%",
          margin: "30px 0px",
        }}
        id="outlined-search"
        label="UPI Id"
        type="search"
      />
    </div>
  );
};

export default Upi;
