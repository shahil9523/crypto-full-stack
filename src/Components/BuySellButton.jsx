import React from "react";
import { Button } from "@material-ui/core";
// import { createTheme } from '@mui/material/styles';

const BuySellButton = () => {
  return (
    <div className="BuySellButton">
      <Button
        className="BuyButton"
        variant="contained"
        size="small"
        color="primary"
      >
        Buy
      </Button>
      <Button className="SellButton" variant="contained" size="small">
        Sell
      </Button>
    </div>
  );
};

export default BuySellButton;
