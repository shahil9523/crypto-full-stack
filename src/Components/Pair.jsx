import React from "react";
import PairName from "./PairName";

const Pair = (props) => {
  return (
    <div className="Pairbox">
      <PairName text={props.pairname} />
    </div>
  );
};
export default Pair;
