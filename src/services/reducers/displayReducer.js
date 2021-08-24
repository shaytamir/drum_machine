// import React from "react";
// import onEqaual from "./onEqual.js";
// import { checkForDecimal, deleteLast } from "../hooks/useCalculits.js";
import Sets from "../drum_sets/sets";

const initialState = {
  setName: Sets[0].setName,
  drumSet: Sets[0],
  padName: "",
  power: true,
  volume: "0.5",
};
const reducer = (state, action) => {
  const [act, val] = action;
  console.log("act", act);
  console.log("val", val);

  switch (act) {
    case "setsetName":
      return { ...state, setName: val };
    case "setdrumSet":
      return { ...state, drumSet: val, setName: val.setName };

    case "setPad":
      return { ...state, padName: val };
    case "setPower":
      return {
        ...state,
        power: !state.power,
        volume: !state.power ? "0.5" : "0",
      };
    case "displayVolume":
      return {
        ...state,
        volume: val,
        padName: "Volume: " + Math.round(val * 100),
      };
    case "volumUp":
      const vol = Number(val) + 0.01;
      if (vol < 1)
        return {
          ...state,
          volume: String(vol),
          padName: "Volume: " + Math.round(vol * 100),
        };
      else
        return {
          ...state,
          volume: String(1),
          padName: "Volume: " + 100,
        };
    case "volumDown":
      const vol2 = Number(val) - 0.01;
      if (vol2 > 0)
        return {
          ...state,
          volume: String(vol2),
          padName: "Volume: " + Math.round(vol2 * 100),
        };
      else
        return {
          ...state,
          volume: String(0),
          padName: "Volume: " + 0,
        };

    case "clear":
      return initialState;

    default:
      return state;
  }
};

const reducerValue = [reducer, initialState];
export default reducerValue;
