import React, { useState } from "react";
import Pair from "./Pair.jsx";
import ExchangeRankTable from "./ExchangeRankTable";

const FetchedTable = () => {
  const [active, setactive] = useState("BTC");
  return (
    <div>
      <h1>Crypto dashboard</h1>
      <div className="pairs">
        <button className="Button1" onClick={() => setactive("BTC")}>
          <Pair pairname="BTC-USDT" />
        </button>
        <button className="Button1" onClick={() => setactive("ETH")}>
          <Pair pairname="ETH-USDT" />
        </button>
        <button className="Button1" onClick={() => setactive("XRP")}>
          <Pair pairname="XRP-USDT" />
        </button>
        <button className="Button1" onClick={() => setactive("BAT")}>
          <Pair pairname="BAT-USDT" />
        </button>
        <button className="Button1" onClick={() => setactive("ADA")}>
          <Pair pairname="ADA-USDT" />
        </button>
      </div>
      <div className="ExTable">
        {active === "BTC" && <ExchangeRankTable id="BTC" />}
        {active === "ETH" && <ExchangeRankTable id="ETH" />}
        {active === "XRP" && <ExchangeRankTable id="XRP" />}
        {active === "BAT" && <ExchangeRankTable id="BAT" />}
        {active === "ADA" && <ExchangeRankTable id="ADA" />}
      </div>
    </div>
  );
};
export default FetchedTable;
