import { TextField } from "@mui/material";
import React from "react";
import MultipleSelect from "./Month";
import MultipleSelectYear from "./Year";

const Card = () => {
  return (
    <div>
      <p>Card Details</p>
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <TextField
          style={{ flex: 2 }}
          id="outlined-search"
          label="Card Number"
          type="search"
        />
        <TextField
          style={{ flex: 1 }}
          id="outlined-search"
          label="CVV"
          type="search"
        />
      </div>
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <MultipleSelect />
        <MultipleSelectYear />
      </div>
      <TextField
        style={{ width: "100%" }}
        id="outlined-search"
        label="Card Holder's Name"
        type="search"
      />
    </div>
  );
};

export default Card;
