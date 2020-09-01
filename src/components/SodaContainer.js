import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buySoda } from "../redux/soda/sodaActions";

function SodaContainer() {
  const numOfSodas = useSelector((state) => state.soda.numOfSodas);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Sodas - {numOfSodas}</h2>
      <button onClick={() => dispatch(buySoda())}>Buy Soda</button>
    </div>
  );
}

export default SodaContainer;
