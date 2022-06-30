import React, { useEffect, useState } from "react";
import axios from "axios";
import BuySellButton from "./BuySellButton.jsx";
// function DataFetching()
// {

// }
const ExchangeRankTable = (props) => {
  const [tb, setTb] = useState([]);
  useEffect(() => {
    axios
      .get(`./record${props.id}.json`)
      .then((res) => {
        console.log(res);
        setTb(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);
  return (
    <div className="ExchangeRankTable">
      <table>
        <tr>
          <th>Exchange</th>
          <th>Price</th>
          <th>Buy/Sell</th>
        </tr>

        {tb.map((data) => (
          <tr key={data.id}>
            <td>{data.exc}</td>
            <td>{data.price}</td>
            <td>
              <BuySellButton />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default ExchangeRankTable;
