import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyJuice } from "../redux/index";

function JuiceContainer() {
  const numOfJuices = useSelector((state) => state.juice.numOfJuice);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Juices - {numOfJuices}</h2>
      <button onClick={() => dispatch(buyJuice())}>Buy Juice</button>
    </div>
  );
}

export default JuiceContainer;
